const people = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
];

// !item.know.includes(narcName.name);
//нарцис  'Jhon'

const people2 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'

const people3 = [
  {
    name: 'Alex',
    know: ['Alex', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса

const people4 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'

const findNarc = (arr) => {
  const narcName = arr.find((item) => item.know.length === 0);
  console.log(narcName);
  if (!narcName) {
    console.log('немає нарциса');
    return;
  }
  //   const allKnow = arr.filter((item) => {
  //     if (item.name === narcName.name) {
  //       return false;
  //     }
  //     if (!item.know.includes(narcName.name)) {
  //       return true;
  //     }
  //   });

  //   const allKnow = arr.some((item) => {
  //     if (item.name === narcName.name) {
  //       return false;
  //     }
  //     return !item.know.includes(narcName.name);
  //   });

  //   console.log('allKnow', !allKnow);

  //   if (!allKnow) {
  //     console.log('нарцис', narcName.name);
  //     return;
  //   }
  //   console.log('немає нарциса');

  const allKnow = arr.every((item) => {
    if (item.name === narcName.name) {
      return true;
    }

    return item.know.includes(narcName.name);
  });

  if (allKnow) {
    console.log('нарцис', narcName.name);
    return;
  }
  console.log('немає нарциса');
};

findNarc(people2);

//Нарциса знають всі, нарцис незнає нікого

/*
Потрібно перевірити "same" масиви
числа з першого у квадраті дорівнюють числам другого
*/

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
