//// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :
//// -- отримує текст з параграфа з id "content"
// let elementByIdContent = document.getElementById("content");
// console.log(elementByIdContent);
// //// -- отримує текст з блоку з id "rules"
//
// let elementByIdRules = document.getElementById("rules");
// console.log(elementByIdRules);
//
// //// -- замініть текст параграфа з id 'content' на будь-який інший
// elementByIdContent.innerText = "Lorem XXXXX ipsum dolor sit amet, consectetur adipisicing elit."
// console.log(elementByIdContent);
//
// //// -- замініть текст параграфа з id 'rules' на будь-який інший
// elementByIdRules.innerText = "Уран — сьома від Сонця велика планета Сонячної системи, належить до планет-гігантів."
// console.log(elementByIdRules.innerText);
//// -- змініть кожному елементу колір фону на червоний

let elementByIdNameContent = document.getElementById("content");
elementByIdNameContent.style.background = "red"

let elementByIdNameRules = document.getElementById("rules");
elementByIdNameRules.style.background = "red"

let getElementsByClassNameFc_rules = document.getElementsByClassName("fc_rules");

for (const FcRule of getElementsByClassNameFc_rules) {

    FcRule.style.background = "red"

}


//// -- змініть кожному елементу колір тексту на синій

elementByIdNameContent.style.color = "blue";
elementByIdNameRules.style.color = "blue";
for (const FcRule of getElementsByClassNameFc_rules) {

    FcRule.style.color = "blue"

}

//// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(elementByIdNameRules.classList);

//// -- поміняти колір тексту у всіх елементів fc_rules на червоний

for (const FcRule of getElementsByClassNameFc_rules) {
    FcRule.style.background = 'white'
    FcRule.style.color = "red"
}

