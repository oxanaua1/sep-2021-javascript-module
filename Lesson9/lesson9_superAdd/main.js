// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// let emptyArr = [];
//
// for (let user1 of users) {
//
//
//
//     let divUser1 = document.createElement('div');
//     let divAddress = document.createElement('div');
//     let divCity = document.createElement('div');
//     let divCountry = document.createElement('div');
//     let divStreet = document.createElement('div');
//     let divHouseNum = document.createElement('div');
//
//
//
//     document.body.appendChild(divUser1);
//     divUser1.appendChild(divAddress);
//     divAddress.appendChild(divCity);
//     divAddress.appendChild(divCountry);
//     divAddress.appendChild(divStreet);
//     divAddress.appendChild(divHouseNum);
//
//
//     divCity.innerText = user1.address.city + ",";
//     divCountry.innerText = user1.address.country + ",";
//     divStreet.innerText = user1.address.street + ",";
//     divHouseNum.innerText = user1.address.houseNumber;
//
// console.log(divUser1);
//
// emptyArr.push(user1.address);
//
// }
// console.log(emptyArr);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//
//     let divContainer = document.createElement('div');
//     let divUser = document.createElement('div');
//     let divName = document.createElement('div');
//     let divAge = document.createElement('div');
//     let divStatus = document.createElement('div');
//     let divAddress = document.createElement('div');
//     let divCity = document.createElement('div');
//     let divCountry = document.createElement('div');
//     let divStreet = document.createElement('div');
//     let divHouseNum = document.createElement('div');
//
//
//     document.body.appendChild(divContainer);
//     divContainer.appendChild(divUser);
//     divUser.appendChild(divName);
//     divUser.appendChild(divAge);
//     divUser.appendChild(divStatus);
//     divUser.appendChild(divAddress);
//     divAddress.appendChild(divCity);
//     divAddress.appendChild(divCountry);
//     divAddress.appendChild(divStreet);
//     divAddress.appendChild(divHouseNum);
//
//
//     divName.innerText = user.name;
//     divAge.innerText = user.age;
//     divStatus.innerText = user.status;
//     divCity.innerText = user.address.city + ",";
//     divCountry.innerText = user.address.country + ",";
//     divStreet.innerText = user.address.street + ",";
//     divHouseNum.innerText = user.address.houseNumber;
//
//
//     divAddress.style.display = 'flex';
//     divAddress.style.columnGap = '10px';
//     divUser.style.margin = '10px';
//     divUser.style.background = 'cornflowerblue'
//
//
//     console.log(divContainer);
// }


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
// який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let tagH2 = document.getElementsByTagName('h2');
//
// let contentId = document.getElementById('id=content');
// let ulList = document.createElement("ul");
//
// document.body.appendChild(ulList);
//
// ulList.innerText = 'Зміст:';
//
// for (const element of tagH2) {
//     let liList = document.createElement('li');
//     ulList.appendChild(liList);
//     liList.innerText = element.textContent;
//     console.log(liList)
//
// }

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let divWrap = document.createElement('div');
document.body.appendChild(divWrap);

for (const rule of rules) {

    let divRule = document.createElement('div');
    let h2Title= document.createElement('h2');
    let pBody= document.createElement('p');


    h2Title.innerText = rule.title;
    pBody.innerText = rule.body;

    divWrap.appendChild(divRule);
    divRule.appendChild(h2Title);
    divRule.appendChild(pBody);


}

console.log(divWrap);