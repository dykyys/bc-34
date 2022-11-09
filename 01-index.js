// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length / 2; i++) {
//   const tepm = numbers[i];
//   numbers[i] = numbers[numbers.length - i - 1];
//   numbers[numbers.length - i - 1] = tepm;
// }
// [5, 4, 3, 2, 1];

/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// user.mood = 'happy';
// user['mood'] = 'happy';

// const userMood = 'mood';

// user[userMood] = 'happy';

// user.hobby = 'skydiving';
// user['hobby'] = 'skydiving';

// const userHobby = 'hobby';
// user[userHobby] = 'skydiving';

// user.premium = false;

// const userStatus = 'premium';
// user[userStatus] = false;

// console.log(user);

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть метод об'єкта для підсумовування всіх зарплат та збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// console.log([] + 100);

// const total = values.reduce((acc, item) => {
//   console.log('acc', acc);
//   acc.push(item);
//   return acc;
// }, []);

// const total = values.reduce((acc, item) => [...acc, item], []);

// console.log('total', total);

/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Щебінь', price: 200, quantity: 2 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
];

// const calcTotalPrice = (stones, stoneName) => {
//   const price = stones.reduce((acc, item) => {
//     if (item.name === stoneName) {
//       return item.price * item.quantity + acc;
//     }
//     return acc;
//   }, 0);

//   console.log('price', price);
// };
// calcTotalPrice(stones, 'Щебінь');

// const calcTotalPrice = (stones, stoneName) => {
//   const stone = stones.find((item) => item.name === stoneName);
//   const price = stone.price * stone.quantity;
//   console.log('price', price);
// };
// calcTotalPrice(stones, 'Щебінь');

/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзацький лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт з властивостями: id, type та amount
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Початковий ID для транзакції
  startId: 0,

  // Істория транзакций
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.generateId(),
    };
  },

  // Генерація id для транзакції
  generateId() {
    return (this.startId += 1);
  },

  /*
   * Метод, який відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод, який відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   *Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(findId) {
    const transaction = this.transactions.find(({ id }) => id === findId);

    return transaction ? transaction : 'not found';
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(typeOperation) {
    return this.transactions.reduce(
      (acc, { type, amount }) => (type === typeOperation ? acc + amount : acc),
      0
    );
  },
};

account.deposit(2100);
account.deposit(2100);
account.deposit(2100);
account.deposit(2100);
account.deposit(2100);
account.deposit(2100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);

console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getBalance());
