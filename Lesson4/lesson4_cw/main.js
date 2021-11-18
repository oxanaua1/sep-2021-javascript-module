//1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//     function minNumner(a, b, c){
//     if (a < b && a < c){
//         console.log(a)
//     }else if (b < a && b < c){
//         console.log(b)
//     } else if (c < a && c < b){
//         console.log(c)
//     }else{
//     }
//
//  }
//
// minNumner(1,2,3);
// minNumner(2,9,3);
// minNumner(10,1,3);


//2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNum (a, b, c) {
//     if (a > b && a > c){
//         console.log(a)
//     }else if (b > a && b > c){
//         console.log(b)
//     } else if (c > a && c > b){
//         console.log(c)
//     }else{
//
//     }
//
// }
//
// maxNum(1,3,5);
// maxNum(3,4,2)
// maxNum(-3,0,6)

//3 - створити функцію яка повертає найбільше число з масиву

// let numArray = [50, 4, 200, 88, 9, 999, 33, 0, 55];
//
// function findMax (xxx){
//     let element = xxx[0];
//
//     for (let x of xxx) {
//         if(element < x) {
//              element = x
//         }
//     }
//     return element
// }
// console.log(findMax(numArray));


//4 - створити функцію яка повертає найменьше число з масиву

// let numArray = [50, 4, 200, 88, 9, 999, 33, 0, 55];
//
// function findMin(array){
//     let minElement = array[0]
//
//     for (let element of array) {
//         if (element  < minElement)
//             minElement = element
//     }
//     return minElement;
//
// }
//
// console.log(findMin(numArray))
//


//5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numArray = [1, 2, 3, 4];
//
// function sumAll(array) {
//     let res = 0;
//
//     for (let elementArray of array) {
//
//         res = res + elementArray
//     }
//
//     return res
//
// }
// console.log(sumAll(numArray));


//6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let numArray = [1, 2, 3, 4, 5];
//
// function middleSum (array) {
//     let middleNum = 0;
//     for (let elementArray of array){
//         middleNum = (middleNum + elementArray)
//     }
//     return middleNum / array.length
// }
// console.log(middleSum(numArray))


// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

//
// function maxminNum(array) {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let element of arguments) {
//         if (element > max){
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//
//     }
//     console.log(max);
//     return min;
//
// }
// let numArray = [1, 2, 3, 4, 5];
// console.log(maxminNum(numArray))
//

//8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let numArray = [];
// function randomNum (array) {
//
//
//     for (let i = 0; i < 20; i++) {
//         array[i] = Math.round(Math.random()*100)
//     }
//     return array;
// }
// console.log(randomNum(numArray))



//9 - створити функцію, яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// let numArray = [];
// function limitRandom (arr, litim) {
//     for (let i = 0; i < 5; i++) {
//         arr[i] = Math.round(Math.random()*litim)
//
//     }
//     return arr
// }
//
// console.log(limitRandom(numArray, 10))

//10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let numArray = [1, 2, 3, 4, 5];
// function reverseArr (array) {
//     let newArr = [];
//
//     for (let i = array.length-1; i >= 0; i--) {
//
//      newArr.push (array[i])
//
//     }
//     return newArr
//
// }
//
// console.log(reverseArr(numArray))