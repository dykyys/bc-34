import { getRefs } from './getRefs';
import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCards } from './createGalleryCards';
import { onError, onSuccess } from './notify';

const unsplashAPI = new UnsplashAPI({ perPage: 24 });

const refs = getRefs();

const handleSubmit = event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;

  clearPage();

  const searchQuery = query.value.trim().toLowerCase();

  if (!searchQuery) {
    onError('I don`t know what your want 😁');
    return;
  }

  unsplashAPI.query = searchQuery;

  unsplashAPI
    .getPhotos()
    .then(({ data: { results, total } }) => {
      if (results.length === 0) {
        onError(`We don\`t find photos by ${searchQuery}`);
        return;
      }

      unsplashAPI.calculateTotalPages(total);

      if (unsplashAPI.isShowLoadMore) {
        refs.loadMoreBtn.classList.remove('is-hidden');
      }

      addMarkup(results);
      onSuccess(`We found ${total} photos by ${searchQuery}`);
    })
    .catch(error => {
      onError(error.message);
      clearPage();
    });
};
const handleClick = () => {
  unsplashAPI.incrementPage();

  if (!unsplashAPI.isShowLoadMore) {
    refs.loadMoreBtn.classList.add('is-hidden');
  }

  unsplashAPI
    .getPhotos()
    .then(({ data: { results } }) => {
      addMarkup(results);
    })
    .catch(error => {
      onError(error.message);
      clearPage();
    });
};

refs.form.addEventListener('submit', handleSubmit);
refs.loadMoreBtn.addEventListener('click', handleClick);

function addMarkup(photos) {
  const markup = createGalleryCards(photos);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function clearPage() {
  refs.list.innerHTML = '';
  unsplashAPI.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
}
