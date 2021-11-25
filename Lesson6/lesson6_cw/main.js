// 1 - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let validName = str => {
//    return  str.replaceAll("..", " ")
//                 .replaceAll("---", " ")
//                 .replaceAll("__", " ");
// }
// console.log(validName(n1));
// console.log(validName(n2));
// console.log(validName(n3));

// 2 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let randomNumbers = (length, num) => {
//     let arrNew = [];
//     for (let i = 0; i < length; i++) {
//         arrNew.push(Math.round(Math.random() * num));
//
//     }
//
//     return arrNew
// }
//
// let randomNum = randomNumbers(20, 100);
//
// console.log(randomNum);


// 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// randomNum.sort((a, b) => a - b);
// console.log(randomNum);
//
// randomNum.sort((a, b) => b - a);
// console.log(randomNum);


// 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomNumbers = (length, size) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * size));
//      }
//     console.log(array);
//     return array.filter(value => value % 2 === 0);
// }
//
// let randomNum = randomNumbers(10, 50);
//
// console.log(randomNum);

// 5 - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//
// let random = (length, size) => {
//     array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*size));
//        
//     }
//     return array.map(value => value.toString());
//
// }
// console.log(random(10,30));


// 6 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11, 21, 3];
//
// sortNums = (arr, direction) => {
//     if (direction === 'asc') {
//         return arr.sort((a, b) => a - b)
//     }
//     if (direction === 'des') {
//         return arr.sort((a, b) => b - a)
//     }
// }
// console.log(sortNums(nums, 'asc'));
// console.log(sortNums(nums, 'des'));

// 7 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let monthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(monthDuration)
//
// // -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// let monthDuration3 = monthDuration.filter(value => {
//     return value.monthDuration > 5;
// })
// console.log(monthDuration3);

// 8 - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let cutString = (str, n) => {
//     let arrString = [];
//
//     while (str.length) {
//        arrString.push(str.substring(0, n));
//        str = str.slice(n)
//     }
//     return arrString
//
//
// }
// document.writeln(cutString('наслаждение', 3));
