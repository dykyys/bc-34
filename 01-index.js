/*
 * Деструктуризація об'єктів
 */

// const a = 'spase';
// const b = {};
// const isAdmin = 'false';

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin,
// };

// user[a] = 'margin';
// user[b] = 'padding';

// console.log(user);

/*
? Напишіть деструктуруюче привласнення, яке:
? Властивості firstName присвоє змінну firstName.
? властивості age привласнить змінну userAge.
? властивості isAdmin присвоє змінну isAdmin (false, якщо немає такої властивості)
*/

// const { firstName, age: userAge, isAdmin: userAdmin } = user;

//const firstName = user.firstName
//const userAge = user.age

// console.log('firstName', firstName);
// console.log('userAge', userAge);
// console.log('userAdmin', userAdmin);

/*
 * Глибока деструктуризація об'єктів
 */

// const team = {
//   number: 4,
//   // flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'pl',
//   },
// };
// const defaultImg =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

// const {
//   number,
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
//   flag: teamFlag = defaultImg,
// } = team;
// console.log('number', number);
// console.log('employees', employees);
// console.log('original', originalLang);
// console.log('secondary', secondaryLang);
// console.log('teamFlag', teamFlag);

/*
 * Деструктуризація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh'];

// const [user, , , user3 = 'mango'] = names;

// console.log(user);

// console.log(user3);

// const user2 = names[1];
// console.log(user2);

// const rgb = [0, 255, 25];

// const [red = 0, green = 0, blue = 0] = rgb;
// console.log('red', red);
// console.log('green', green);
// console.log('blue', blue);
