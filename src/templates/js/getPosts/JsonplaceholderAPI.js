export class JsonplaceholderAPI {
  #BASE_URL = 'https://jsonplaceholder.typicode.com/';
  #page;
  #limit = 50;
  #totalPage = 0;
  constructor({ limit, page }) {
    this.#limit = limit;
    this.#page = page;
  }
  getPosts() {
    const url = `${this.#BASE_URL}posts?_page=${this.#page}&_limit=${
      this.#limit
    }`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('shit happens');
      }
      return response.json();
    });
  }
  incrementPage() {
    this.#page += 1;
  }
  getPage() {
    return this.#page;
  }
  calculateTotalPage(totalPosts) {
    this.#totalPage = Math.ceil(totalPosts / this.#limit);
  }
  hasMorePosts() {
    return this.#page < this.#totalPage;
  }
}
