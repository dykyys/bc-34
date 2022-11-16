import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMarkup } from './createMarkup';
import { UnsplashAPI } from './UnsplashAPI';
import { ShowLoadMore } from './ShowLoadMore';
import { spinerPlay, spinerStop } from './spiner';
import { refs } from './refs';

const unsplash = new UnsplashAPI({ per_page: 20 });
const loadMore = new ShowLoadMore('.js-more');

const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { query },
  } = event.target;
  const searchQuery = query.value.trim();

  if (!searchQuery) {
    Notify.failure('Input query!!!');
    return;
  }

  if (unsplash.query === searchQuery) {
    Notify.info('Already show!');
    return;
  }

  unsplash.query = searchQuery;

  refs.list.innerHTML = '';
  unsplash.resetPage();

  loadMore.hide();

  spinerPlay();
  unsplash
    .getPhotos()
    .then(({ results, total }) => {
      if (results.length === 0) {
        Notify.warning(`We don\`t find any photos by ${searchQuery} 🤷‍♀️`);
        return;
      }

      unsplash.setTotal(total);

      const markup = createMarkup(results);

      refs.list.insertAdjacentHTML('beforeend', markup);

      const showMore = unsplash.hasMorePhotos();

      if (showMore) {
        loadMore.show();
      }
    })
    .catch(error => {
      Notify.failure(error.message);
    })
    .finally(() => {
      spinerStop();
    });

  event.target.reset();
};

const onLoadMoreClick = () => {
  unsplash.incrementPage();

  const showMore = unsplash.hasMorePhotos();

  if (!showMore) {
    loadMore.hide();
  }
  spinerPlay();
  unsplash
    .getPhotos()
    .then(({ results, total }) => {
      const markup = createMarkup(results);
      refs.list.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => {
      Notify.failure(error.message);
      loadMore.hide();
    })
    .finally(() => {
      spinerStop();
    });
};
refs.form.addEventListener('submit', handleSubmit);
refs.loadMore.addEventListener('click', onLoadMoreClick);
