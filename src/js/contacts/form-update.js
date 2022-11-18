import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';
import localStorApi from './localestorage';
import { spinerPlay, spinerStop } from './spinner';
import { refs } from './refs';
import { updateContact } from './service/AXIOS.contact.service';
import { createContact } from './createContact';

const LOCAL_STORAGE_KEY = 'user-data-update';

initForm();

const toggleHiddenModal = () => {
  refs.backdropUpdate.classList.toggle('is-hidden');
};

const handleSubmit = async event => {
  event.preventDefault();
  const { id, name, email, phone } = event.target.elements;

  if (id.value === '') {
    Notify.failure('Заповніть полe id і спробуйте ще раз!');
    return;
  }

  if (name.value === '' && email.value === '' && phone.value === '') {
    Notify.failure('Заповніть поля які бажаєте оновити і спробуйте ще раз!');
    return;
  }

  const userData = {};

  const formData = new FormData(refs.formUpdate);

  formData.forEach((value, name) => {
    if (!value) return;
    userData[name] = value;
  });

  spinerPlay();

  try {
    const contact = await updateContact(userData);
    Notify.success(`${contact.id} updated!`);

    console.log(contact);
    const data = createContact(contact);
    const items = document.querySelectorAll(`[data-id]`);
  } catch (error) {
    Notify.failure('Try again. Check id!');
    console.log(error.message);
  } finally {
    spinerStop();
  }

  toggleHiddenModal();
  event.target.reset();
  localStorApi.remove(LOCAL_STORAGE_KEY);
};

const handleInput = event => {
  const { name, value } = event.target;
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  persistedData = persistedData ? persistedData : {};

  persistedData[name] = value;
  localStorApi.save(LOCAL_STORAGE_KEY, persistedData);
};

function initForm() {
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  if (persistedData) {
    Object.entries(persistedData).forEach(([name, value]) => {
      refs.formUpdate.elements[name].value = value;
    });
  }
}

refs.openModalUpdate.addEventListener('click', toggleHiddenModal);
refs.closeModalUpdate.addEventListener('click', toggleHiddenModal);

refs.formUpdate.addEventListener('input', throttle(handleInput, 300));
refs.formUpdate.addEventListener('submit', handleSubmit);
