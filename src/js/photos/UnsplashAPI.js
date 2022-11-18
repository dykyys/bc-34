import axios from 'axios';
// LxvKVGJqiSe6NcEVZOaLXC - f2JIIWZaq_o0WrF8mwJc;
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID 4dc0c9edd3f8399861773bf78562a506e26384e3c5d582c06359e3e1c4b70c33';

export class UnsplashAPI {
  #page = 1;
  #query = '';
  #totalPhotos = 0;
  #per_page = 1;

  constructor({ per_page = 25 } = {}) {
    this.#per_page = per_page;
  }
  async getPhotos() {
    const params = {
      page: this.#page,
      query: this.#query,
      per_page: this.#per_page,
      orientation: 'landscape',
      color: 'black_and_white',
    };

    const { data } = await axios.get(`/search/photos?`, {
      params,
    });
    return data;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  incrementPage() {
    this.#page += 1;
  }
  resetPage() {
    this.#page = 1;
  }
  setTotal(newTotal) {
    this.#totalPhotos = newTotal;
  }

  hasMorePhotos() {
    return this.#page < Math.ceil(this.#totalPhotos / this.#per_page);
  }
}
