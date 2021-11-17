// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectangleP(a, b) {
//    let res = a * b;
//    return res;
//
// }
// res = rectangleP(2, 3);
// console.log(res);
//


// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleS(r) {
//
//     let sqrCircle = 3.14 * (r**2);
//     return sqrCircle
// }
//
// console.log(circleS(4));
// console.log(circleS(6));
//


// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderS(r, h) {
//     let cylrRes = 2 * 3.14 * r * h;
//     return cylrRes;
//
// }
//
// console.log(cylinderS(3, 4));


// 4 - створити функцію яка приймає масив та виводить кожен його елемент
//
// let array = [10, 20, false, 'apples', true];
//
// function elementArray (array) {
//     for (let i = 0; i < array.length; i++) {
//
//          console.log(array[i]);
//     }
// }
// elementArray(array)

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function textCreation(text){
//    document.write(`<p>${text}</p>`);
//
// }
// textCreation(`Lorem ipsum dolor sit amet.`);


// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listText(list){
//     document.write(`<ul>`)
//
//     for (let i = 0; i < 10; i++) {
//         document.write(`<li>${list}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// listText(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, vitae?`);


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function listTextIndex(textList, num){
//     document.write(`<ul>`)
//     for (let i = 0; i <= num; i++) {
//         document.write(`<li>${textList}</li>`);
//
//     }
//         document.write(`</ul>`)
// }
// listTextIndex(`Lorem ipsum dolor sit amet.`, 10);
//


// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [10, 20, false, 'apples', true];
//
// function partArray(array){
//         document.write(`<ul>`)
//     for (let i = 0; i <  array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//         }
//         document.write(`</ul>`)
//
// }
// partArray(array)


// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let usersArray = [
    {id: 10, name: 'Anna', age: 22},
    {id: 20, name: 'Mykola', age: 25},
    {id: 30, name: 'Valentyn', age: 30},
    {id: 40, name: 'Olia', age: 19}
];

function usersBlock(usersArray) {

    for (let user of usersArray) {
        document.write(`<div>${user.id};
                             ${user.name};
                             ${user.age}

          </div>`);

    }
}

usersBlock(usersArray)