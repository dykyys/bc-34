// https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { spinerPlay, spinerStop } from './spinner';

import { refs } from './refs';
import {
  getContacts,
  getContactById,
  deleteContact,
  updateContact,
} from './service/AXIOS.contact.service';
import { createContact } from './createContact';

initPage();

async function initPage() {
  spinerPlay();

  try {
    const contacts = await getContacts();
    Notify.success(`All contacts!`, { position: 'left-top' });
    const sortedContacts = [...contacts].sort((a, b) => b.id - a.id);
    const markup = sortedContacts.map(createContact);
    refs.list.innerHTML = markup.join('');
  } catch (error) {
    console.log(error.message);
  } finally {
    spinerStop();
  }
}

const handleClick = async event => {
  if (event.target.nodeName === 'UL' || event.target.nodeName === 'A') {
    return;
  }

  const item = event.target.closest('.js-contact-card');

  spinerPlay();

  if (event.target.nodeName === 'BUTTON') {
    handleDelete(item);
    return;
  }

  getContactInfo(item.dataset.id);
};

refs.list.addEventListener('click', handleClick);
refs.reload.addEventListener('click', initPage);

async function handleDelete(item) {
  try {
    const contact = await deleteContact(item.dataset.id);
    Notify.success(`${contact.name} deleted!`, { position: 'left-top' });
    item.remove();
  } catch (error) {
    console.log(error.message);
  } finally {
    spinerStop();
  }
}

async function getContactInfo(id) {
  try {
    const contact = await getContactById(id);
    Notify.success(`Info about ${contact.name}`);
    const markup = createContact(contact);
    refs.list.innerHTML = markup;
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}
