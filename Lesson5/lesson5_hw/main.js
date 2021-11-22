// Всі функції повинні бути описані стрілочним типом!!!!
//  1 - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectangleS = (a, b) =>  a * b;
// console.log(rectangleS(2,3))

// 2 - створити функцію яка обчислює та повертає площу кола
// let circleS = r => 3.14 * (r**2);
// console.log(circleS(3));

// 3 - створити функцію яка обчислює та повертає площу циліндру
//
// let cylinderS = (r, h) => 2 * 3.14 * r * h;
// console.log(cylinderS(2, 3));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// xxx = [2, 8, 3, 21, 50];
// let elementArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// elementArray(xxx);


// 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = (text, size) => {
//     for (let i = 0; i < size; i++) {
//
//         document.write(`<p>${text}</p>`);
//     }
//
// }
// paragraph(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, similique!`,10);


// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listFn = (text) => {
//
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//
//         }
// listFn(`Lorem ipsum dolor sit amet.`);
//


// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let listFn = (text, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listFn(`Lorem ipsum dolor sit amet.`, 3);


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let ddd = [10, 20, false, 'apples', true];
//
// let listArray = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// listArray(ddd);


// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let usersArray = [
//     {id: 1, name: 'Anna', age: 22},
//     {id: 2, name: 'Mykola', age: 25},
//     {id: 3, name: 'Valentyn', age: 30},
//     {id: 4, name: 'Olia', age: 19}
// ];
//
//
// let objArray = (array) => {
//     document.write(`<ul>`)
//     for (let arrayElement of array) {
//         document.write(`<li>
//         ${arrayElement.id}:
//         ${arrayElement.name},
//         ${arrayElement.age}.
//         </li>`)
//     }
//     document.write(`</ul>`)
// }
// objArray(usersArray);
//





