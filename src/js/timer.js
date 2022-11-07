import { Notify } from 'notiflix/build/notiflix-notify-aio';
const TIMER_DEADLINE = new Date(2022, 10, 11, 18, 00);

class Timer {
  intervalId = null;
  refs = {};
  datasetValues = {
    days: ['день', 'дня', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  };
  constructor(rootSelector, targetDate) {
    this.rootSelector = rootSelector;
    this.targetDate = targetDate;
  }
  start() {
    if (this.targetDate < Date.now()) {
      Notify.failure('Виберіть дату в майбутньому!');
      return;
    }
    this.#getRefs();

    Notify.success('Таймер запущено!');

    this.intervalId = setInterval(() => {
      const delta = this.targetDate - Date.now();

      if (delta < 0) {
        Notify.success('Вихідні!!!😊');
        clearInterval(this.intervalId);
        return;
      }

      const date = this.#convertMs(delta);
      this.#updateValue(date);
    }, 1000);
  }

  #updateValue(date) {
    Object.entries(date).forEach(([key, value], index) => {
      this.refs.items[index].textContent = this.#addLeadinZero(value);
      const word = this.#declensionNum(value, this.datasetValues[key]);
      this.refs.items[index].dataset.title = word;
    });
  }

  #getRefs() {
    const timer = document.querySelector(this.rootSelector);
    this.refs.items = [...timer.children];
  }
  #convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  }
  #addLeadinZero(value) {
    return String(value).padStart(2, '0');
  }
  #declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
}

const timer = new Timer('.timer__items', TIMER_DEADLINE);

timer.start();
