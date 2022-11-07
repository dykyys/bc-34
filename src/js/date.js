import { format } from 'date-fns';
import { uk } from 'date-fns/esm/locale';
// Створення нової дати
// const date = new Date(2022, 8, 7, 15, 5, 0, 0);

// console.log('date', date);

// console.log('month', date.getMonth());
// console.log('hours', date.getHours());
// Методи дати

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

// const targetDate = new Date(2012, 1, 26, 3, 12, 34);

// console.log('👀 > targetDate', targetDate);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   //   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   //   const index = date.getDay();

//   const result = format(date, 'EEEEEE', {
//     locale: uk,
//   });
//   console.log('date', result);
// };
// getWeekDay(targetDate);

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);
//   console.log('date', date.getDate());
// };
// getLastDayOfMonth(2012, 1);

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до обраної дати.

// const getSecondsToTomorrow = () => {
//   setInterval(() => {
//     let date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     const day = date.getDate();
//     const targetDate = new Date(year, month, day + 1, 0, 0, 0);
//     const delta = targetDate - date;
//     console.log('delta', delta);
//     if (delta === 0) {
//       targetDate.setDate(day + 1);
//     }
//   }, 1000);
// };

// getSecondsToTomorrow();
