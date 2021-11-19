// 1- створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи -
// складає або конкатенує їх між собою.
//
// function addArg(x,y){
//     let res;
//
//     if (y === undefined)  {
//        res = x;
//     } else {
//        res = x + y
//     }
//     return res
//
// }
//
// console.log(addArg(`aaa`))
//

// 2- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

//
// function addArr( arr1, arr2) {
//
//     for (let i = 0; i < arr2.length; i++) {
//
//         arr2[i] = arr1[i] + arr2[i];
//     }
//     return arr2;
// }
//
// let a = [1, 2, 3, 4];
// let b = [2, 3, 4, 5];
// console.log(addArr([1, 2, 3, 4], [2, 3, 4, 5]));


// 3- Створити функцію яка приймає масив будь-яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

//
// let example = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
// function keyArr(array) {
//
//
//     for (let arrayElement of array) {
//         for (let arrayElementKey in arrayElement) {
//
//             console.log(arrayElementKey)
//         }
//
//     }
//     return array
// }
//
// keyArr([{name: 'Dima', age: 13}, {model: 'Camry'}]);


// 4- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

//
// let xxx = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
// function valueArr(array) {
//
//     for (let arrayElement of array) {
//         for (let arrayElementKey in arrayElement) {
//             console.log(arrayElement[arrayElementKey])
//     }
//     }
// }
//
// valueArr([{name: 'Dima', age: 13}, {model: 'Camry'}])
