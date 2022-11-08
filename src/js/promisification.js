//? Запит за користувачем на колбэках

// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone < 0.5) {
//       console.log('success');
//       const user = {
//         name: 'Mango',
//         mail: 'mango@gmail.com',
//         age: 21,
//       };
//       onSuccess(user);
//     } else {
//       console.log('error');

//       onError(`${name} not found!`);
//     }
//   }, 1000);
// };

// const onSuccess = data => {
//   console.log(data);
// };

// const onError = error => {
//   console.log(error);
// };

// fetchUserByName('Mango', onSuccess, onError);

//? Запит за користувачем на промісах

//         const user = {
//           name: 'Mango',
//           mail: 'mango@gmail.com',
//           age: 21,
//         };

// https://api.github.com/users/dykyys
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

// const fetchUserByName = name => {
//   console.log('Робимо запит на сервер...');

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isDone = Math.random();
//       if (isDone < 0.5) {
//         const user = {
//           name,
//           mail: 'mango@gmail.com',
//           age: 21,
//         };
//         resolve(user);
//       } else {
//         reject(`${name} not found!`);
//       }
//     }, 1000);
//   });
// };

// const onSuccess = data => {
//   console.log(data);
// };

// const onError = error => {
//   console.log(error);
// };

// fetchUserByName('Mango').then(onSuccess).catch(onError);

// https://api.github.com/users/dykyys
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

function getUserInfo(name) {
  const url = `https://api.github.com/users/all`;
  return new Promise((resolve, reject) => {
    const myRequest = new XMLHttpRequest();
    myRequest.open('GET', url);
    myRequest.send();
    myRequest.addEventListener('load', () => {
      resolve(myRequest);
    });
    myRequest.addEventListener('error', () => {
      reject(myRequest);
    });
  });
}
getUserInfo('kiwi')
  .then(data => {
    console.log(JSON.parse(data.responseText));
  })
  .catch(error => {
    console.log(error);
  });
