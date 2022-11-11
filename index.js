'use strict';

/*
 *  Контекст виклику this
 */

/*
 * this існує тільки всередині функцій.
 * На контекст не впливає те, де функція була //! ОГОЛОШЕНА.
 * На контекст впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 * Якщо функція визивається в контексті об'єкта, this посилається на цей об'єкт
 * Якщо функція визивається без контекста this --> undefined (в суворому режимі)
 * Якщо функція визивається без контекста this --> window (в НЕ суворому режимі)
 * При передачі функції як callback контекст не зберігається
 * this  в сктрілочних функціях посилається на батьківський this:
 *  - якщо стрілочна функція визивається без контексту або в контексті об'єкта, this --> window
 *  - якщо стрілочна функція оголошена в серередині функції (не стрілочної) this стрілочної функції буде посилатися на батьківський this
 */

//TODO: Розглянемо як this поводиться в методах об'єкта

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log('this', this);
//     console.log(this.name);
//   },
// };

// user.showName();

//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)

//? Function declaration

// function foo() {
//   console.log(this);
// }

// foo();

//? Function expression

// const foo = function () {
//   console.log(this);
// };

// foo();

//? Arrow function

// const foo = () => {
//   console.log('this', this);
// };
// foo();
// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     const foo = () => {
//       console.log('arrow this', this);
//     };
//     foo();
//   },
// };

// user.showName();

//TODO: Присвоєння функції як методу об'єкту

// const user = {
//   name: 'Mango',
// };

// const showName = function () {
//   console.log(this);
// };

// user.showUserName = showName;
// console.log('user', user);
// user.showUserName();

// console.log(user.showUserName === showName);

//TODO: Виклик методу об'єкта без контекстa

// const user = {
//   name: 'Mango',
//   showUserName() {
//     console.log(this);
//   },
// };
// // user.showUserName();

// const showName = user.showUserName;

// showName();

//TODO: This в callback функціях

// const user = {
//   name: 'Kiwi',
//   showName() {
//     console.log(this);
//   },
// };

// const foo = function (callback) {
//   callback();
// };
// foo(user.showName);

//TODO: this у стрілочних функціях. Стрілочні функції не мають свого this, this у стрілочних функціях завжди посилається на батьківський this.

// const user = {
//   name: 'Kiwi',
//   showName() {
//     console.log(this);
//     const arrow = () => {
//       console.log('this in arrow', this);
//     };
//     arrow();
//   },
// };

// const foo = function (callback) {
//   callback();
// };
// foo(user.showName);

/*
? Яким буде результат виконання цього коду?
*/

// const user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     const arrow = () => console.log('this in arrow function', this);
//     arrow();
//   },
// };
// // user.go();

// const goFn = user.go;

// goFn();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const user = {
//   name: 'Luis',
//   age: 30,
//   makeUser() {
//     return {
//       name: 'Mango',

//       ref: this,
//       age: this.age,
//     };
//   },
// };

// user.makeUser();
// const newUser = user.makeUser();
// console.log('newUser', newUser);
// const newUser2 = newUser.ref.makeUser();
// console.log('newUser2', newUser2);

// console.log(newUser === newUser2);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// console.log(user);
// console.log(user.name);
// console.log(user.ref());
// console.log(user.ref().name);

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this;
//   },

//   down() {
//     this.step -= 1;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.down();
// ladder.showStep();

//Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити ланцюжком, наприклад так:
// ladder.up().up().up().down().down().up().up().showStep();

// console.log(ladder.up().up().up().down().down().down().showStep());

/*
Потрібно перевірити "same" масиви
числа з першого у квадраті дорівнюють числам другого
*/
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const sameArr = (a, b) => {
//   if (a.length !== b.length) {
//     console.log('not same');
//     return false;
//   }

//   const aSorted = [...a].sort((a, b) => a - b);
//   const bSorted = [...b].sort((a, b) => a - b);

//   console.log('aSorted', aSorted);
//   console.log('bSorted', bSorted);

//   return aSorted.every((elem, index) => bSorted[index] === elem ** 2);
// };

// console.log(sameArr(a, b));
