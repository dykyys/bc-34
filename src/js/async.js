/*
 * Синхронний vs Асинхронний JS
 */

// Стек виклику функцій

// console.log('Start');

// const id = setTimeout(() => {
//   console.log('In setTimeout');
// }, 0);

// const id2 = setTimeout(() => {
//   console.log('In setTimeout 2');
// }, 0);

// const id3 = setTimeout(() => {
//   console.log('In setTimeout 3');
// }, 0);

// let count;
// for (let i = 0; i < 10000; i += 1) {
//   count = i;
// }
// console.log('count', count);

// console.log('id 1', id);
// console.log('id 2', id2);
// console.log('id 3', id3);
// console.log('End');

// const intervalId = setInterval(() => {
//   console.log(Date.now());
// }, 1000);

// const id = setTimeout(() => {
//   console.log('clear Interval In setTimeout');
//   clearInterval(intervalId);
// }, 10000);

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
// const intervalId = setTimeout(() => {
//   console.log('Hello', Date.now());
// }, 1500);

// document.addEventListener('click', () => {
//   clearTimeout(intervalId);
//   console.log('clear');
// });
