import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMarkup } from './createMarkup';
import { getWeatherByCoords, getWeatherByQuery } from './weatherAPI';
import { setBackground } from './setBackground';
import { getPlaseInfo } from './getPlaseInfo';

const weatherWrapRef = document.querySelector('.weather__wrapper');
const formRef = document.querySelector('.js-search-form');

navigator.geolocation?.getCurrentPosition(({ coords }) => {
  const { latitude, longitude } = coords;

  getWeatherByCoords(latitude, longitude).then(data => {
    const markup = createMarkup(data);
    weatherWrapRef.innerHTML = markup;
  });
  getPlaseInfo(latitude, longitude).then(({ results }) => {
    const { components } = results[0];
    const plase = components?.city ?? components?.country;
    setBackground(plase);
  });
});

const handleSubmit = event => {
  event.preventDefault();
  const { user_country } = event.currentTarget.elements;

  const searchQuery = user_country.value.trim().toLowerCase();

  if (!searchQuery) {
    Notify.failure('Enter sity name');
    return;
  }

  setBackground(searchQuery);

  getWeatherByQuery(searchQuery).then(data => {
    const markup = createMarkup(data);
    weatherWrapRef.innerHTML = markup;
  });
};

formRef.addEventListener('submit', handleSubmit);
