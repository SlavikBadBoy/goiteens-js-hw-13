// // Створив масив з трьох чисел
// const numbers = [1, 2, 3];

// // Деструктуризація для зміни значення другого елемента
// [, secondElement] = numbers;
// secondElement = 10;
// numbers[1] = secondElement;
// console.log(numbers);

// // Деструктуризація для додавання елемента до масиву рядків
// const stringsArray = ["Hello", "World", "!"];
// stringsArray.push(...["JavaScript"]);

// console.log(stringsArray);

// // Масив з числами
// const sumNumbers = [1, 2, 3, 4, 5];

// let [number1, number2, ...rest] = sumNumbers;

// let sum = number1 + number2 + rest.reduce((a, b) => a + b, 0);

// console.log(sum);
// Масив з 5-ма числами

// // Масив з 10-ма числами
// let tenNumbers = [1, 22, 3, 44, 5, 66, 7, 88, 9, 100];

// // Деструктуризація для отримання елементів
// const [max, ...rest] = tenNumbers.sort((a, b) => b - a); // Сортування за спаданням

// console.log(max); // Виводить: 100

// Масив з 10-ма числами

