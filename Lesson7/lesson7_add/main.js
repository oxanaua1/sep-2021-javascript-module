// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {street, suite, city, zipcode};
    this.address.geo = {lat, lng};
    this.phone = phone;
    this.website = website;
    this.company = {companyName, catchPhrase, bs}
}

let user1 = new User(1, 'Bret', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
console.log(user1)


// -  Створити функцію конструктор / клас, який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий, який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }


class Tag1 {

    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr1, actionOfAttr1) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [
            {titleOfAttr, actionOfAttr},
            {titleOfAttr1, actionOfAttr1}
        ]

    }
}

let tagA = new Tag1('a', 'Предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег "a" устанавливает ссылку или якорь. ',
    'accesskey', 'Активация ссылки с помощью комбинации клавиш', 'coords', 'Устанавливает координаты активной области.')
console.log(tagA)


function Tag(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr1, actionOfAttr1) {

    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [
        {titleOfAttr, actionOfAttr},
        {titleOfAttr1, actionOfAttr1}
    ]


}

let div = new Tag('div', `Элемент 'div' является блочным элементом и предназначен для выделения фрагмента документа с
 целью изменения вида содержимого`, 'align', 'адает выравнивание содержимого тега div.', 'title', 'Добавляет всплывающую подсказку к содержимому.')
console.log(div)

let h1 = new Tag('h1', 'Заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.', 'универсальные атрибуты', 'accesskey, class, contenteditable, contextmenu, hidden, id')
console.log(h1)

let span = new Tag('span', 'предназначен для определения строчных элементов документа', 'универсальные атрибуты', 'accesskey, class, contenteditable, contextmenu, hidden, id')
console.log(span);

let input = new Tag('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
    'type', 'Сообщает браузеру, к какому типу относится элемент формы.', 'pattern', 'Устанавливает шаблон ввода.')
console.log(input);
let form = new Tag('form', 'Связывает поле с формой по её идентификатору')
console.log(form);

let option = new Tag('option','определяет отдельные пункты списка, создаваемого с помощью контейнера "select"',
    'disabled', 'Заблокировать для доступа элемент списка.','label','Указание метки пункта списка.',)
console.log(option);


let select = new Tag('select','позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    'accesskey','Позволяет перейти к списку с помощью некоторого сочетания клавиш.','autofocus','Устанавливает, что список получает фокус после загрузки страницы.')
console.log(select);

