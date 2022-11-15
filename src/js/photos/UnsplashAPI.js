export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  #page = 1;
  #query = '';
  #totalPhotos = 0;
  #per_page = 1;
  #searchParams = new URLSearchParams({
    client_id: this.#API_KEY,
    orientation: 'landscape',
    color: 'black_and_white',
  });

  constructor({ per_page = 10 } = {}) {
    this.#per_page = per_page;
  }
  getPhotos() {
    const url = `${this.#BASE_URL}/search/photos?page=${this.#page}&query=${
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

  incrementPage() {
    this.#page += 1;
  }
  setTotal(newTotal) {
    this.#totalPhotos = newTotal;
  }

  hasMorePhotos() {
    return this.#page < Math.ceil(this.#totalPhotos / this.#per_page);
  }
}
