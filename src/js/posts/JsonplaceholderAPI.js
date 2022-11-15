export class JsonplaceholderAPI {
  static BASE_URL = 'https://jsonplaceholder.typicode.com/';
  #page = 1;
  #limit = 25;
  #totalPosts = 100;

  constructor({ limit }) {
    this.#limit = limit;
  }
  getPosts() {
    const url = `${JsonplaceholderAPI.BASE_URL}posts?_page=${
      this.#page
    }&_limit=${this.#limit}`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  incrementPage() {
    this.#page += 1;
  }

  hasMorePosts() {
    return this.#page < Math.ceil(this.#totalPosts / this.#limit);
  }
}
