// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення): колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let htmlDiv = document.createElement("div");
// console.log(htmlDiv);
//
// htmlDiv.innerText = 'hello world'
// htmlDiv.classList.add('wrap');
// htmlDiv.classList.add('collapse');
// htmlDiv.classList.add('alpha');
// htmlDiv.classList.add('beta');
// htmlDiv.style.background = 'blue'
// htmlDiv.style.margin = '10px'
// htmlDiv.style.width = '400px'
//
// document.body.appendChild(htmlDiv);
//
// let cloneDiv = htmlDiv.cloneNode(true);
// document.body.appendChild(cloneDiv);
// //скорочено:
// document.body.appendChild(htmlDiv.cloneNode(true));
//
//

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
//
// for (const menuLi of array) {
//     let htmlLi = document.createElement('li');
//
//     document.body.appendChild(htmlLi);
//
//     htmlLi.innerText = menuLi;
//
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const element of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     document.body.appendChild(htmlDivElement);
//     console.log(htmlDivElement);
//     htmlDivElement.innerText = element.title + " " + element.monthDuration;
// }


//
// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const course of coursesAndDurationArray1) {
    let divCourse = document.createElement('div');
    let h1Course = document.createElement('h1');
    let pCourse = document.createElement('p');

    document.body.appendChild(divCourse);
    divCourse.appendChild(h1Course);
    divCourse.appendChild(pCourse);

    divCourse.classList.add('item');
    h1Course.classList.add('heading');
    pCourse.classList.add('description');

    h1Course.innerText = course.title + " " + course.monthDuration;



}