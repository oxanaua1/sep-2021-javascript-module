// Всі функції повинні бути описані стрілочним типом!!!!
// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNum = (a, b, c) => {
//         if (a < b && a < c){
//             console.log(a)
//         }else if (b < a && b < c){
//             console.log(b)
//         } else if (c < a && c < b){
//             console.log(c)
//         }else{
//         }
// }
// minNum(4,8,2)


// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNum = (a, b, c) => {
//     if (a > b && a > c){
//         console.log(a);
//     }else if (b > a && b > c){
//         console.log(b);
//     } else if (c > a && c > b){
//         console.log(c);
//     }else{
//     }
// };
// maxNum(1,2,3);


// 3 - створити функцію яка повертає найбільше число з масиву
// let numArray = [50, 4, 200, 88, 9, 999, 33, 0, 55];
//
// let maxArrayNum = (array) => {
//     let max = array[0];
//     for (let element of array) {
//         if (element > max) {
//              max = element
//         }
//     }
//     return max
// }
// console.log(maxArrayNum(numArray));


// 4 - створити функцію яка повертає найменьше число з масиву
//
// let minArrNum = (array) => {
//     let min = array[0];
//     for (let element of array) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min
// }
// let numArray = [50, 4, 200, 88, 9, 999, 33, 0, -3, 55];
// console.log(minArrNum(numArray));


// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// let numArray = [10, 20, 30, 1, 1];
//
// let sumFn = (array) => {
//     let sum = 0;
//     for (let element of array) {
//       sum = sum + element;
//     }
//     return sum
// }
// console.log(sumFn(numArray))

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//  let numArray = [10, 20, 30, 1, 1];
//
// let sumFn = (array) => {
//     let sum = 0;
//
//     for (let element of array) {
//       sum += element;
//     }
//     return sum/array.length;
// }
// console.log(sumFn(numArray))

// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
//
// let maxMinNumFn = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (let element of array) {
//         if (element > max) {
//             max = element;}
//
//         if (element < min) {
//             min = element;}
//
//     }
//     console.log(max);
//     return min;
// }
// let numArray = [1, 2, 3, 4, 5];
// maxMinNumFn(numArray)

// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let numArray = [];
//
// let randomFn = (array) => {
//     for (let i = 0; i < 10; i++) {
//         array[i] = Math.round(Math.random()*100)
//
//     }
//     return array;
// }
// console.log(randomFn(numArray));


// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

// let numArray = [];
//
// let randomFn = (array, size, limit) => {
//     for (let i = 0; i < size; i++) {
//         array[i] = Math.round(Math.random() * limit)
//
//     }
//     return array;
// }
// console.log(randomFn(numArray, 10, 20));


// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let numArray = [1, 2, 3, 4, 5];
//
// let reverseArrFn = (array) => {
//     let newArr = [];
//     for (let i = array.length-1; i >= 0; i--) {
//
//      newArr.push (array[i])
//
//     }
//     return newArr
//
// }
// console.log(reverseArrFn(numArray))