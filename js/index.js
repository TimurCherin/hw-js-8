// Завдання 1. Створити масив з трьох чисел.Змінити значення другого елемента масиву на 10.

const myArray = [4, 2, 3];
myArray[1] = 10;
console.log(myArray);

// Завдання 2. Створити масив із трьох рядків. Додати до масиву ще однин рядок.

const names = ["Kolya", "Tom", "Yulia"];
names.push("Vova");
console.log(names);

// Завдання 3. Створити скрипт який поверне суму всіх чисел в масиві.

const numbers = [3, 4, 5, 6, 7, 70, 22, 345, 23];
let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log(sum);

// Завдання 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const myNumbers = [4, 43, 21, 87, 54];
for (const number of myNumbers) {
  alert(number);
}

// Завдання 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const stringArray = ["summer", "winter", "spring", "auttumn", "snow"];
for (const string of stringArray) {
  if (string.length > 5) {
    console.log(string);
  }
}

// Завдання 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const bigArray = [4, 45, 33, 567, 33, 342, 22, 675, 343, 677];
let biggest = 0;
for (const big of bigArray) {
  if (big > biggest) {
    biggest = big;
  }
}
console.log(biggest);

// Завдання 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const array = [10, 2, 4, 5, 3, 45, 324, 54, 3, 23];
for (const number of array) {
  if (number % 2 === 0) {
    console.log(number);
  }
}