export const createPostsCards = cards => {
  return cards.map(
    ({ title, body, id }) => /*html*/ `<li class="posts__item">
    <h2 class="posts__title">${title}</h2>
    <p class="posts__text">${body}</p>
    <p class="posts__id">id: ${id}</p>
</li>`
  );
};
