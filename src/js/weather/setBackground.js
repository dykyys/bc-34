import { createClient } from 'pexels';
export function setBackground(query) {
  const client = createClient(
    '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74'
  );

  const defaultImg =
    'https://dreamdim.ua/wp-content/uploads/2022/03/rus_nax-1024x589.jpeg';

  const randomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  client.photos
    .search({
      query,
      per_page: 40,
      size: 'large',
    })
    .then(data => {
      const index = randomNumber(data.photos.length);
      console.log('data', data);
      const { large2x: src = defaultImg } = data.photos[index]?.src ?? {};

      document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${src}') center fixed; background-size: cover;`;
    });
}
