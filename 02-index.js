/* ============== Метод map() ============== */
// const numbers = [1, 2, 3, 4, 5];

// const ownMap = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i], i, arr));
//   }

//   return newArr;
// };
// const multi = ownMap(numbers, (elem, index) => elem * index);

// console.log('multi', multi);
/* ============== Метод filter() ============== */
// const numbers = [1, 2, 3, 4, 5];
// const ownFilter = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const completed = callback(arr[i], i, arr);
//     if (completed) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

// const filteredNumbers = ownFilter(numbers, (element) => element <= 3);

// console.log('filteredNumbers', filteredNumbers);

/* ============== Метод findIndex() ============== */
// const numbers = [1, 2, 3, 4, 5];
// const ownFindIndex = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const completed = callback(arr[i], i, arr);
//     if (completed) {
//       return i;
//     }
//   }
//   return -1;
// };

// const index = ownFindIndex(numbers, (element) => element === 8);

// console.log('index', index);

/* ============== Метод reduce() ============== */

// const numbers = [1, 2, 3, 4, 5];
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Манго', score: 83 },
//   { name: 'Манго', score: 83 },
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: 'Ківі', score: 94 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
//   { name: "Х'юстон", score: 64 },
//   { name: "Х'юстон", score: 64 },
// ];

// const ownReduce = function (arr, callback, initialValue = arr[0]) {
//   let start = 0;
//   if (initialValue === arr[0]) {
//     start = 1;
//   }
//   for (let i = start; i < arr.length; i++) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }
//   return initialValue;
// };

// const total = ownReduce(students, (acc, { name }) => [...acc, name], []);

// const statistics = ownReduce(
//   students,
//   (acc, item) => {
//     if (acc[item.name]) {
//       acc[item.name] = item.score + acc[item.name];
//     } else {
//       acc[item.name] = item.score;
//     }
//     return acc;
//   },
//   {}
// );

// const statistics = ownReduce(
//   students,
//   (acc, { name, score }) => ({
//     ...acc,
//     [name]: acc[name] ? acc[name] + score : score,
//   }),
//   {}
// );

// console.log('statistics', statistics);
