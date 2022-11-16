export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #query = '';
  #per_page = 1;
  #searchParams = new URLSearchParams({
    client_id: this.#API_KEY,
    orientation: 'landscape',
    color: 'black_and_white',
  });

  constructor({ per_page = 25 } = {}) {
    this.#per_page = per_page;
  }

  getPopylarPhotos(page) {
    const url = `${this.#BASE_URL}/search/photos?page=${page}&query=cat&${
      this.#searchParams
    }&per_page=${this.#per_page},`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  getPhotos(page) {
    const url = `${this.#BASE_URL}/search/photos?page=${page}&query=${
      this.#query
    }&${this.#searchParams}&per_page=${this.#per_page},`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
