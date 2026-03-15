// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   let login = prompt("Введіть Ім'я");
//   for (const name of array) {
//     if (name === login) {
//       alert(`Welcome, ${name}!`);
//       return;
//     } else {
//       alert("User not found");
//       return;
//     }
//   }
// }
// function checkLogin(array) {
//   let login = prompt("Введіть Ім'я");
//   if (array.includes(login)) {
//     alert(`Welcome, ${login}!`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let sum = 0;
//   let count = 0;
//   for (const val of arguments) {
//     if (typeof val === "number") {
//       count++;
//       sum += val;
//     }
//   }
//   return count > 0 ? sum / count : 0;
// }
// console.log(
//   caclculateAverage(1, 3, "olya", true, null, { name: "petya" }, [0, 1, 2], 5),
// );

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function totalSum(array) {
//   let sum = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     sum.push(array[i] + array[i + 1]);
//   }
//   return sum;
// }
// console.log(totalSum(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     return Math.min(...numbers);
//   } else {
//     return "Sory, it is not an array!";
//   }
// }
// console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// let keys = Object.keys(user);
// for (key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.val1 = a;
//     this.val2 = b;
//   },
//   exist() {
//     if (this.val1 !== undefined && this.val2 !== undefined) {
//       return true;
//     }
//     return false;
//   },
//   sum() {
//     if (this.exist()) {
//       return this.val1 + this.val2;
//     }
//   },
//   mult() {
//     if (this.exist()) {
//       return this.val1 * this.val2;
//     }
//   },
// };

// calculator.read(10, 15);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator);

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Банан", price: 125, quantity: 3 },
// ];

// function calcTotalPrice(array, fruitName) {
//   let sum = 0;
//   for (const fruit of array) {
//     if (fruit.name === fruitName) {
//       sum += fruit.price * fruit.quantity;
//     }
//   }
//   return sum;
// }

// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//   contacts: [],
//   add(data) {
//     this.contacts.push({
//       id: this.generateId(),
//       createdAt: this.getDate(),
//       category: "default",
//       ...data,
//     });
//   },
//   list() {
//     console.table(this.contacts);
//   },
//   filtered(category) {
//     let filtredContacts = [];
//     for (const contact of this.contacts) {
//       if (contact.category === category) {
//         filtredContacts.push(contact);
//       }
//     }
//     return filtredContacts;
//   },
//   delete(name) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === name) {
//         this.contacts.splice(i, 1);
//         break;
//       }
//     }
//   },
//   updateName(oldName, newName) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === oldName) {
//         this.contacts[i].name = newName;
//       }
//     }
//   },

//   generateId() {
//     return "#" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });
// console.log(phonebook.filtered("friends"));
// phonebook.delete("Katy");
// console.log(phonebook.updateName("Poly", "Katya"));
// phonebook.list();
