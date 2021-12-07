// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// ------------FORM - 1-----------------------
let div1 = document.createElement('div');
let form1 = document.createElement('form');
let input11 = document.createElement('input');
let input12 = document.createElement('input');
let button1 = document.createElement('button');


form1.setAttribute('name', 'form1');
input11.setAttribute('name', 'input11');
input12.setAttribute('name', 'input12');
div1.innerText = 'Form - 1';
button1.innerText = 'enter'
button1.style.width = '100px';
button1.style.height = '30px';
input11.style.height = '25px';
input12.style.height = '25px';
div1.style.display = 'flex';


document.body.appendChild(div1);
div1.append(form1, button1);
form1.append(input11, input12);


button1.addEventListener("click", function () {
    console.log(document.forms.form1.input11.value, document.forms.form1.input12.value);

});

console.log(div1);


// ------------FORM - 2-----------------------

let div2 = document.createElement('div');
let hr = document.createElement('hr');
let form2 = document.createElement('form');
let input21 = document.createElement('input');
let input22 = document.createElement('input');
let button2 = document.createElement('button');


form2.setAttribute('name', 'form2');
input21.setAttribute('name', 'input21');
input22.setAttribute('name', 'input22');
div2.innerText = 'Form - 2';
button2.innerText = 'enter'
button2.style.width = '100px';
button2.style.height = '30px';
input21.style.height = '25px';
input22.style.height = '25px';
div2.style.display = 'flex';


document.body.append(div2, hr);
div2.append(form2, button2);
form2.append(input21, input22);


button2.addEventListener("click", function () {
    console.log(document.forms.form2.input21.value, document.forms.form2.input22.value)
});

console.log(div2);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let inputOne = document.createElement('input');
let inputTwo = document.createElement('input');
let inputThree = document.createElement('input');
let btn = document.createElement('button');
let hr1 = document.createElement('hr');

btn.innerText = 'table';

document.body.append(inputOne, inputTwo, inputThree, btn, hr1);

btn.addEventListener("click", function () {
    let tr = inputOne.value;
    let td = inputTwo.value;
    let content = inputThree.value;

    function creationTable(tr, td, content) {
        let divTable = document.createElement('div');
        let table = document.createElement('table');

        document.body.appendChild(divTable);
        divTable.appendChild(table);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.innerText = content;
                table.appendChild(tr);
                tr.appendChild(td);

            }
        }
    }

    creationTable(tr, td, content);
});


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
//Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
//Перевірку робити при натисканні на кнопку


let wordsX = ['блін', 'собача кров', 'свиняче рило', 'дідька лисого', 'чорт', 'дурень'];

let inputWord = document.createElement('input');
let buttonWord = document.createElement('button');

buttonWord.innerText = 'Перевірити слово'

document.body.appendChild(inputWord);
document.body.appendChild(buttonWord);

buttonWord.addEventListener('click', function () {
    for (const word of wordsX) {
        if (inputWord.value === word) {
            alert('містить нецензурне слово');
            inputWord.value = '';
            return;
        }
        if (inputWord.value){
            alert('good boy!');
            inputWord.value = '';
        }

    }

});




