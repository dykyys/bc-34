import { JsonplaceholderAPI } from './JsonplaceholderAPI';
import { createPostCard } from './createPostCard';
import { refs } from './refs';

const page = localStorage.getItem('save-page') ?? 1;

const jsonplaceholderAPI = new JsonplaceholderAPI({ limit: 20, page });

jsonplaceholderAPI.getPosts().then(data => {
  const markup = createPostCard(data);
  jsonplaceholderAPI.calculateTotalPage(100);
  const isShowLoadMoreBnt = jsonplaceholderAPI.hasMorePosts();
  if (isShowLoadMoreBnt) {
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtn.addEventListener('click', handeleClick);
  }
  refs.list.insertAdjacentHTML('beforeend', markup);
});

const handeleClick = () => {
  console.log('click');
  jsonplaceholderAPI.incrementPage();
  const page = jsonplaceholderAPI.getPage();
  localStorage.setItem('save-page', page);

  const isShowLoadMoreBnt = jsonplaceholderAPI.hasMorePosts();

  if (!isShowLoadMoreBnt) {
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.loadMoreBtn.removeEventListener('click', handeleClick);
  }

  jsonplaceholderAPI.getPosts().then(data => {
    const markup = createPostCard(data);
    refs.list.insertAdjacentHTML('beforeend', markup);
  });
};
