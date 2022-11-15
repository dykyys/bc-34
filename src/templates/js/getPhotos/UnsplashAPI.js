import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/search';
axios.defaults.headers.common['Authorization'] =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export class UnsplashAPI {
  #query = '';
  #page = 1;
  #totalPages = 0;
  #perPage;
  #searchParams = new URLSearchParams({
    color: 'purple',
    orientation: 'portrait',
    per_page: 12,
  });

  constructor({ perPage = 12 } = {}) {
    this.#perPage = perPage;
  }

  getPhotos() {
    const url = `/photos?page=${this.#page}&query=${this.#query}`;
    return axios.get(url, { params: this.#searchParams });
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
  calculateTotalPages(totalPhotos) {
    this.#totalPages = Math.ceil(totalPhotos / this.#perPage);
  }

  incrementPage() {
    this.#page += 1;
  }
  resetPage() {
    this.#page = 1;
  }
}
