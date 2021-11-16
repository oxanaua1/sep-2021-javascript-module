// 1 --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [10, 20, 30, 40, 50];
// console.log(number);
//
// let fruits = ['bananas', 'apples', 'pears', 'oranges', 'lemons'];
// console.log(fruits);
//
// let user = ['olia', 22, 'status', true, false];
//
// console.log(user);

// 2. -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let user = [];
//
// user[0] = 'olia';
// user[1] = 22;
// user[2] = 'status';
// user[3] = 'true';
// user[4] = '2021';
// console.log(user);

// 3.1- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// 3.2- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>item${i}</div>`)
//
// }


// 3.2- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// document.write(`<h1>`)

// let i = 0;
// while (i < 20) {
//     document.write(`Any Text`)
//
//     i++;
// }
// document.write(`</h1>`)


// 3.3- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// document.write(`<h1>`)
//
// let i = 0;
// while (i < 20) {
//     document.write(`item${i} `)
//
//     i++;
// }
// document.write(`</h1>`)


// 4.1- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];
//
//
// for (i = 0; i < numbers.length; i++) {
//
//     console.log(numbers[i])
// }


// 4.2- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let products = ['bananas', 'apples', 'pears', 'oranges', 'lemons','potato', 'vine', 'coffee', 'tea', 'milk'];
//
//
// for (let i = 0; i < products.length; i++) {
//
//    console.log(products[i])
// }

// 4.3- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.


// let items = ['bananas', 'apples', 'pears', 'oranges', 'lemons', 1980, 23, false, 10070, true];
//
// for (let i = 0; i < items.length; i++) {
//
//     console.log(items);
// }


// 4.4- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let items = ['bananas', 'apples', 'pears', 'oranges', 'lemons', 1980, 23, false, 10070, true];
//
// for (i = 0; i < items.length; i++) {
//     if (typeof items [i] === 'boolean')
//
//     console.log(items [i])
//
//
// }


// 4.5- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let items = ['bananas', 'apples', 'pears', 'oranges', 'lemons', 1980, 23, false, 10070, true];
//
// for (i = 0; i < items.length; i++) {
//     if (typeof items [i] === 'number')
//         console.log(items [i])
//
// }
//


// 4.6- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let items = ['bananas', 'apples', 'pears', 'oranges', 'lemons', 1980, 23, false, 10070, true];
//
// for (i =0; i < items.length; i++) {
//     if (typeof items [i] === 'string')
//         console.log(items [i])
//
// }
//

// 5.1 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let items = [];
//
// items[0] = 'bananas';
// items[1] = 'apples';
// items[2] = 'oranges';
// items[3] = 'pears';
// items[4] = 'lemons';
// items[5] = 1980;
// items[6] = 23;
// items[7] = false;
// items[8] = 10070;
// items[9] = true;
//
// for (i = 0; i < items.length; i++)
//
//     console.log(items[i])


// 5.2 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`item ${i}`);
//     document.write(`<div>item ${i}</div>`)
//
// }


// 5.3 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//
//     console.log(i)
//     document.write(`<div>${i}</div>`)
//
//
// }


// 5.4 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 0; i < 100; i += 2) {
//      console.log(i)
//      document.write(`<div>${i}</div>`)
//
//  }


// 5.5 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0) {
//         console.log(i)
//         document.write(`<div>${i}</div>`)
//
//     }
//
// }


// 5.6 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         console.log(i)
//         document.write(`<div>${i}</div>`)
//
//     }
//
// }

