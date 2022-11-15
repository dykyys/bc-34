export class ShowLoadMore {
  #loadMoreBtn = null;
  constructor(selector) {
    this.#loadMoreBtn = document.querySelector(selector);
  }
  show() {
    this.#loadMoreBtn.classList.remove('is-hidden');
  }
  hide() {
    this.#loadMoreBtn.classList.add('is-hidden');
  }
}
