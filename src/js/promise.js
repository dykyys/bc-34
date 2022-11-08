/*
 * Проміси
 */

// let value = 0;

// const promise = new Promise((resolve, reject) => {
//   resolve(3400);
//   reject('qwe');
//   setTimeout(() => {
//     console.log('setTimeout');
//     resolve(999999);
//     // reject('qwe');
//   }, 1000);
//   //
// });

// promise
//   .then(data => {
//     console.log('1 then');
//     console.log('data', data);
//     return data + 500;
//   })
//   .then(data => {
//     console.log('data', data);
//     console.log('2 then');
//     console.log('succes');
//     value = data;
//     // return data + 100;
//     throw new Error('error in 2 then');
//   })
//   .then(data => {
//     console.log('data', data);
//     console.log('3 then');
//     console.log('succes');
//     return (data += data);
//   })
//   .then(data => {
//     console.log('data', data);
//     console.log('4 then');
//     console.log('succes');
//   })
//   .catch(error => {
//     console.log(error, 'Error in catch');
//   })
//   .finally(() => {
//     console.log('value', value);
//   });

// console.log('value', value);

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

/*
1 - console.log('console.log: 1');
2 - console.log('console.log: 2');
3 - console.log('promise: 1');
4 - console.log('promise: 2');
5 - console.log('setTimeout');
*/

//? конструктор new Promise(callback(resolve, reject));

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   if (isSuccess) {
//     resolve('Done');
//   } else {
//     reject('Error!');
//   }
// });

// promise
//   .then(data => {
//     console.log(data);
//     data += '!';
//     return data;
//   })
//   .then(str => {
//     console.log(str);
//     str += '!!';
//     return str;
//   })
//   .then(onSuccess)
//   .catch(onError)
//   .finally(() => {
//     console.log('The end');
//   });

// //? then(onSuccess, onError)

// function onSuccess(message) {
//   console.log('Success!', message);
// }

// function onError(message) {
//   console.log('Error!', message);
// }

//? TASK 01
// Чи можна "перевиконати" проміс?

//проміс "перевиконати" не можна!!!

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const randomNumber = () => Math.round(Math.random() * 3) + 1;

const makePromise = () => {
  const promise = new Promise((resolve, reject) => {
    const delay = randomNumber();
    setTimeout(() => {
      if (delay <= 2) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay * 1000);
  });
  return promise;
};

const onSuccess = delay => {
  console.log(`✅ Resolved after ${delay} sec`);
};
const onError = delay => {
  console.log(`❌ Rejected after ${delay} sec`);
};
makePromise().then(onSuccess).catch(onError);
