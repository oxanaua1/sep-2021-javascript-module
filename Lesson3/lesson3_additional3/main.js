// 1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
// let oneArrow = [];

// for (let i = 0; i < 50; i++) {
//
//     if (i %2 === 0){
//         console.log([i]);
//     }
//
// }

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let oneArrow = [];
// for (let i = 0; i < 50; i++) {
//
//     if (i%2 !== 0){
//         console.log(i);
//     }
//
// }


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let oneArrow = [];
//
// for (let i = 0; i < 20; i++) {
//
// oneArrow [0] = Math.floor(Math.random()*10)
//
//     console.log(oneArrow);
//
//
// }

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let oneArrow = [];
//
// for (let i = 0; i < 20; i++) {
//
// oneArrow = Math.floor(Math.random()*(732-8)+8)
//
//     console.log(oneArrow);
//
// }

// 2. Вивести за допомогою console.log кожен третій елемен

// let array = [10, 20, 5, 10, 100, 33, -3, 27, 444, 1990];
//
// for (let i = 0; i < array.length; i++) {
//
//
//     if (i % 3 === 0 ) {
//         console.log(array[i]);
//     }
//
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let array = [1, 20, 5, 10, 100, 33, -3, 27, 444, 4];
//
// for (let i = 0; i < array.length; i++) {
//
//     if (i % 3 === 0){
//         if (array[i] % 2 === 0){
//             console.log(array[i]);
//         }
//     }
//
//     }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let array = [1, 20, 5, 10, 100, 33, -3, 27, 444, 4];
//
// for (let i = 0; i < array.length; i++) {
//     let array2;
//     if (i % 3 ===0) {
//         if (array[i] % 2 ===0 ){
//             array2 = array
//
//             console.log(array[i]);
//             console.log(array2[i]);
//
//         }
//     }
// }


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let example = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < example.length; i++) {
//
//     if (example[i] % 2 === 0) {
//         console.log(example[i - 1]);
//     }
//
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100, 250, 50, 168, 120, 345, 188]; //1221 suma, avr 174,42857
//
//
// let sum = 0;
// let avr;
// for (let i = 0; i < array.length; i++) {
//
//     sum = sum + array[i]
//     avr = sum / array.length
// }
//     console.log(sum);
//
//     console.log(avr);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array;
// let arrayNew;
//
// for (let i = 0; i < 5; i++) {
//     array = Math.round(Math.random()*10);
//     arrayNew = array * 5
//
//     console.log(array);
//     console.log(arrayNew);
// }
//


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.

// let array = [12, 100, true, 50, "apple", "banana", -8, false, "potato", "Anna", 1990, "status"];
//
// for (let i = 0; i < array.length; i++) {
//
//
//     if (typeof array [i]  === "number") {
//         let arrayNew = array[i];
//
//         console.log(arrayNew);
//         }
// }


// 9 - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// for (let usersWithIdElement of usersWithId) {
//
//     for (let citiesWithIdElement of citiesWithId) {
//         if (citiesWithIdElement.user_id === usersWithIdElement.id){
//             usersWithIdElement.address = usersWithIdElement
//         }
//
//     }
//     console.log(usersWithIdElement);
// }

// 10 - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [1, 20, 33, 22, 55, 60, 63, 100, 90]
//
//     for (let i = 0; i < array.length; i++) {
//      if (array[i] % 2 === 0) {
//          console.log(array[i]);
//      }
//     }
//
//


// 11 - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [1, 20, 33, 22, 55, 60, 63, 100, 90]
// let arrayNew = [];
//
// for (let i = 0; i < array.length; i++) {
//
//     arrayNew[i] = array[i];
//
//     console.log(arrayNew[i]);
// }


// 12 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let  array = [ 'a', 'b', 'c'];
// let sum = '';
// for (let i = 0; i < array.length; i++) {
//
//
//    sum = sum + array[i]
//
// }
// console.log(sum);


// 13 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


// let  array = [ 'a', 'b', 'c'];
// let sum = '';
// i = 0;
//  while (i < array.length) {
//
//
//   sum = sum + array[i];
//
//     i++
//
// }
// console.log(sum);

// 14 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let  array = [ 'a', 'b', 'c'];
// let sum = '';
// for (let element of array) {
//   sum = sum + element[0];
//
// }
// console.log(sum);
