// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// let user1 = new User(11,`olia`,7,`ui@oppj.ua`,123123)
// console.log(user1)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let usersArr = [
    new User(21, 'Alia', 'Werty', 'werty@gmail.com', 673467890),
    new User(12, 'Kate', 'Kerty', 'kerty@gmail.com', 693000890),
    new User(34, 'Anton', 'Berry', 'berry@gmail.com', 12367894),
    new User(14, 'Lida', 'Swift', 'swift@gmail.com', 9742383346),
    new User(5, 'John', 'Bic', 'bic@gmail.com', 475636478),
    new User(66, 'Vitaliy', 'Brown', 'brown@gmail.com', 744575788),
    new User(17, 'Liza', 'Black', 'black@gmail.com', 8765475477),
    new User(58, 'Garru', 'White', 'white@gmail.com', 856734637),
    new User(19, 'Filip', 'Grey', 'grey@gmail.com', 14353546890),
    new User(10, 'Anna', 'Clay', 'clay@gmail.com', 5653423546)
]
console.log(usersArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let usersFilter = usersArr.filter((value) => {
    if (value.id % 2 === 0) {
        return value
    }
})
console.log(usersFilter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersSort = usersArr.sort((a, b) => a.id - b.id);
console.log(usersSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client

let clientArr = [
    new Client(12, 'Kate', 'Kerty', 'kerty@gmail.com', 693000890, ['bananas', 'apples']),
    new Client(17, 'Liza', 'Black', 'black@gmail.com', 876547547, ['potatoes', 'kiwi']),
    new Client(15, 'Petty', 'Pot', 'pot@gmail.com', 1435354689, ['apples', 'kiwi', 'potatoes']),
    new Client(21, 'Alia', 'Werty', 'werty@gmail.com', 673467890, ['apples', 'kiwi', 'potatoes', 'kiwi']),
    new Client(12, 'Kate', 'Kerty', 'kerty@gmail.com', 693000890, ['apples', 'potatoes', 'kiwi']),
    new Client(34, 'Anton', 'Berry', 'berry@gmail.com', 12367894, ['apples', 'potatoes', 'kiwi']),
    new Client(14, 'Lida', 'Swift', 'swift@gmail.com', 9742383346, ['apples', 'kiwi']),
    new Client(5, 'John', 'Bic', 'bic@gmail.com', 475636478, ['apples', 'potatoes', 'kiwi']),
    new Client(66, 'Vitaliy', 'Brown', 'brown@gmail.com', 744575788, ['potatoes', 'kiwi']),
    new Client(13, 'Kira', 'Clock', 'clock@gmail.com', 8765475477, ['potatoes', 'potatoes', 'kiwi']),
    new Client(58, 'Garru', 'White', 'white@gmail.com', 856734637, ['potatoes', 'kiwi']),
    new Client(19, 'Filip', 'Grey', 'grey@gmail.com', 14353546890, ['potatoes', 'kiwi']),
    new Client(10, 'Anna', 'Clay', 'clay@gmail.com', 5653423546, ['bananas', 'apples', 'potatoes', 'kiwi'])

]
console.log(clientArr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsSort = clientArr.sort((a, b) => (a.order.length - b.order.length));
console.log(clientsSort);

