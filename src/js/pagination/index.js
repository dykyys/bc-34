import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs';
import { UnsplashAPI } from './UnsplashAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { spinerPlay, spinerStop } from './spiner';
import { createMarkup } from './createMarkup';

const PER_PAGE = 25;

const unsplash = new UnsplashAPI({ per_page: PER_PAGE });

const options = {
  totalItems: 0,
  itemsPerPage: PER_PAGE,
  visiblePages: 7,
  page: 1,
  centerAlign: false,
  template: {
    page: '<a href="#" class="tui-custon">{{page}}</a>',
    currentPage:
      '<span class="tui-custon tui-custon-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-custon tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-custon tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-custon tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(refs.pagination, options);

const page = pagination.getCurrentPage();

const loadMorePopylarPhotos = event => {
  const currentPage = event.page;
  spinerPlay();
  unsplash
    .getPopylarPhotos(currentPage)
    .then(({ results }) => {
      const markup = createMarkup(results);

      refs.list.innerHTML = markup;
    })
    .catch(error => {
      Notify.failure(error.message);
      refs.pagination.classList.add('is-hidden');
    })
    .finally(() => {
      spinerStop();
    });
};

pagination.on('beforeMove', loadMorePopylarPhotos);

spinerPlay();
unsplash
  .getPopylarPhotos(page)
  .then(({ results, total }) => {
    if (results.length === 0) {
      Notify.warning(`We don\`t find any photos 🤷‍♀️`);
      return;
    }

    pagination.reset(total);

    const markup = createMarkup(results);

    refs.list.insertAdjacentHTML('beforeend', markup);

    refs.pagination.classList.remove('is-hidden');
  })
  .catch(error => {
    Notify.failure(error.message);
  })
  .finally(() => {
    spinerStop();
  });

const loadMorePhotosByQuery = event => {
  const currentPage = event.page;
  spinerPlay();
  unsplash
    .getPhotos(currentPage)
    .then(({ results }) => {
      const markup = createMarkup(results);

      refs.list.innerHTML = markup;
    })
    .catch(error => {
      Notify.failure(error.message);
    })
    .finally(() => {
      spinerStop();
    });
};

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

  spinerPlay();
  unsplash
    .getPhotos(page)
    .then(({ results, total }) => {
      if (results.length === 0) {
        Notify.warning(`We don\`t find any photos by ${searchQuery} 🤷‍♀️`);
        refs.pagination.classList.add('is-hidden');
        return;
      }

      pagination.off('beforeMove', loadMorePopylarPhotos);
      pagination.off('beforeMove', loadMorePhotosByQuery);
      pagination.on('beforeMove', loadMorePhotosByQuery);

      pagination.reset(total);

      const markup = createMarkup(results);

      refs.list.insertAdjacentHTML('beforeend', markup);

      refs.pagination.classList.remove('is-hidden');
    })
    .catch(error => {
      Notify.failure(error.message);
      refs.pagination.classList.add('is-hidden');
    })
    .finally(() => {
      spinerStop();
    });

  event.target.reset();
};

refs.form.addEventListener('submit', handleSubmit);
