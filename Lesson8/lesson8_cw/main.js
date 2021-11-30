//// Взяти файл template_2.html та працювати в ньому
////1) Напишіть код, який :
//// a) змінює клас тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

let getElementByIdMain_header = document.getElementById('main_header');

getElementByIdMain_header.classList.toggle("sept2021");

console.log(getElementByIdMain_header)

//// b) робить шириниу елементу ul 400px
let getElementsByClassNameLinkList = document.getElementsByClassName('linkList')
for (const elementByClassNameLinkList of getElementsByClassNameLinkList) {

    elementByClassNameLinkList.style.width = '400px';
    console.log(elementByClassNameLinkList)
}

//// c) робить шириниу всіх елементів з класом linkList шириною 50%
for (const elementByClassNameLinkList of getElementsByClassNameLinkList) {

    elementByClassNameLinkList.style.width = '50%';
    console.log(elementByClassNameLinkList)
}

//// d) отримує текст який зберігається в елементі з класом listElement2


let xxx = document.getElementsByClassName("listElement2")


for (const node of xxx) {
    console.log(node.textContent)

}

//// e) отримує всі елементи li та змінює ім колір фону на сірий

let getElementsByClassNameLinkList1 = document.getElementsByClassName('linkList')
for (const elementLinkList of getElementsByClassNameLinkList1) {
    elementLinkList.style.background = 'grey'

}

//// f) отримує всі елементи 'a' та додає їм клас anchor
let elementsByTagNameA = document.getElementsByTagName('a');

console.log(elementsByTagNameA);

for (const elementsA of elementsByTagNameA) {
    elementsA.classList.add('anchor');

}
console.log(elementsByTagNameA);

//// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let elementsByTagNameA1 = document.getElementsByTagName('a');

console.log(elementsByTagNameA1);

for (const elementsA1 of elementsByTagNameA1) {
    if (elementsA1.textContent === 'link3') {
        elementsA1.style.fontSize = '40px'
    }
}

console.log(elementsByTagNameA1);

//// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let elementsByTagNameA2 = document.getElementsByTagName('a');

console.log(elementsByTagNameA2);

for (const elementsA2 of elementsByTagNameA2) {
    let xxxText = elementsA2.textContent

    elementsA2.classList.add('element_' + xxxText)
}

console.log(elementsByTagNameA2);


//// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let elementsByClassNameSubHeader = document.getElementsByClassName('sub-header');

for (const elementSubHeader of elementsByClassNameSubHeader) {
    // elementSubHeader.style.background = prompt();
}

console.log(elementsByClassNameSubHeader);


//// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
let elementsByClassNameSubHeader1 = document.getElementsByClassName('sub-header');

for (const elementSubHeader1 of elementsByClassNameSubHeader1) {
    if (elementSubHeader1.textContent === "content 2 segment"){
        // elementSubHeader1.style.background = prompt();
    }
}

console.log(elementsByClassNameSubHeader1);


//// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()

let elementsByClassNameContent1 = document.getElementsByClassName('content_1');

for (const elementsContent1 of elementsByClassNameContent1) {

    // elementsContent1.innerText = prompt();
}

console.log(elementsByClassNameContent1);


//// l) отримати елементи p та змінити їм padding на 20px

let pList = document.getElementsByTagName('p');
for (const pListElement of pList) {
    pListElement.style.padding = '20px'

}

console.log(pList);

//// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2 = document.getElementsByClassName('text2');

for (const text2Element of text2) {
    text2Element.innerText = 'sep-2021'

}
console.log(text2)
