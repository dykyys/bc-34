import { refs } from './refs';
import { UnsplashAPI } from './UnsplashAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { spinerPlay, spinerStop } from './spiner';
import { createMarkup } from './createMarkup';
const unsplash = new UnsplashAPI();

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

const loadMorePhotos = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);

      unsplash.incrementPage();

      spinerPlay();

      unsplash
        .getPhotos()
        .then(({ results }) => {
          const markup = createMarkup(results);

          refs.list.insertAdjacentHTML('beforeend', markup);

          const showMore = unsplash.hasMorePhotos();

          if (showMore) {
            const lastItem = document.querySelector(
              '.gallery__item:last-child'
            );
            observer.observe(lastItem);
          }
        })
        .catch(error => {
          Notify.failure(error.message);
          observer.unobserve(entry.target);
        })
        .finally(() => {
          spinerStop();
        });
    }
  });
};
const io = new IntersectionObserver(loadMorePhotos, options);

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
        const lastItem = document.querySelector('.gallery__item:last-child');
        io.observe(lastItem);
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

refs.form.addEventListener('submit', handleSubmit);
