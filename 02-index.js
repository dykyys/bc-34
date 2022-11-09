'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//*  Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = numbers.slice();

// const numbers2 = [...numbers];
// console.log(numbers2);

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);
// console.log(numbers === numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

// const all = [].concat(numbers, numbers2);
// const all = [...numbers, ...numbers2];
// console.log(all);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

// const obj = Object.assign({}, o1, o2, o3);
// const obj = { ...o1, ...o2, ...o3 };
// console.log(obj);

//* Розпилення складних типів

const user = {
  firstName: 'Jonathan',
  lastName: 'Barnett',
  age: 30,
  someArr: [1, 2, 3, 4],
  someMethod() {},
};

// const mango = { ...user };
// mango.someArr[10] = 1000;
// console.log('mango', mango);

console.log(user.someArr);

const user2 = _.cloneDeep(user);
user2.someArr[10] = 1000;
console.log('user: ', user);
console.log('user2: ', user2);
