// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length)
// let str2 = 'lorem ipsum';
// console.log(str2.length)
// let str3 = 'javascript is cool';
// console.log(str3.length)

// 2 - Перевести до великого регістру наступні стрінгові значення
// let str1 = 'hello world';
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1);
// let str2 = 'lorem ipsum';
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
// let str3 = 'javascript is cool';
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// let str1 = 'HELLO WORLD';
// let toLowerCase1 = str1.toLowerCase();
// console.log(toLowerCase1);
// let str2 = 'LOREM IPSUM';
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
// let str3 = 'JAVASCRIPT IS COOL';
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.length);
// let trim = str.trim();
// console.log(trim);
// console.log(trim.length)

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
//
// let stringToarray = (arr) => {
// let split = str.split(' ');
// console.log(split);
// document.write(arr);
// }
// stringToarray(str);

// 6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) => {
//     return str.slice(length)
// }
// document.write(delete_characters(str, 7));
//


// 7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
//     return str.replaceAll(' ', '-').toUpperCase()
// }
// document.writeln(insert_dash(str));

//8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let atr= "apple are delicious"
//
// let upperFirstLetter = str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }
// console.log(upperFirstLetter(atr))


// 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let atr = "apple are delicious"
// let capitalize = str => {
//
//
//
//     return str.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
//
// }
// console.log(capitalize(atr));