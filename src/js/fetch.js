'use strict';
// https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/postss')
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('then success');
//     console.log(data);

//   })
//   .catch(error => {
//     console.log(error);
//   });

//? TASK 01
// Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.

// Важливі деталі:

// На кожного користувача повинен бути один запит fetch.
// Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше.
// Якщо якийсь запит завершуєтся помилкою або вияволось, що даних про користувача немає, то функція повина інформувати що сталася помилка.

// const BASE_URL = 'https://api.github.com/users/';
// const userLogins = ['luxplanjay', 'dykyys', 'kiwi', 'mango', 'polly', 'ajax'];
// const getUsers = names => {
//   const promises = names.map(name => {
//     const url = `https://api.github.com/users/${name}`;

//     return fetch(url).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   });

//   return Promise.all(promises);
// };

// getUsers(userLogins)
//   .then(data => {
//     data.forEach(console.log);
//   })
//   .catch(error => {
//     console.log(error);
//   });
