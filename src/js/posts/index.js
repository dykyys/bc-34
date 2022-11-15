import { refs } from './refs';
import { JsonplaceholderAPI } from './JsonplaceholderAPI';
import { createMarkup } from './createMarkup';

const jsonplaceholder = new JsonplaceholderAPI({ limit: 15 });

jsonplaceholder
  .getPosts()
  .then(data => {
    const markup = createMarkup(data);
    refs.list.insertAdjacentHTML('beforeend', markup);
    refs.loadMore.classList.remove('is-hidden');
  })
  .catch(() => {
    refs.loadMore.classList.add('is-hidden');
  });

const onLoadMoreClick = () => {
  jsonplaceholder.incrementPage();

  const swowLoadMore = jsonplaceholder.hasMorePosts();

  if (!swowLoadMore) {
    refs.loadMore.classList.add('is-hidden');
  }

  jsonplaceholder
    .getPosts()
    .then(data => {
      const markup = createMarkup(data);
      refs.list.innerHTML = markup;
    })
    .catch(() => {
      refs.loadMore.classList.add('is-hidden');
    });
};

refs.loadMore.addEventListener('click', onLoadMoreClick);
