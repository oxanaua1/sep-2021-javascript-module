//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed = this.maxSpeed + newSpeed);
//     }
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue);
//     }
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//     }

// }
//
//
// let newCar = new Car('lada', 'ua', 1999, 100, 2.00);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(200);
// newCar.changeYear(2000);
// newCar.addDriver ('John Snow');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let newCar = new Car('lada', 'ua', 1999, 100, 2.00);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(200);
// newCar.changeYear(2000);
// newCar.addDriver ('John Black');
// console.log(newCar);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {

    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let popelushkaArr = [

    new Popelushka('Liza', 25, 35),
    new Popelushka('Kira', 24, 34),
    new Popelushka('Sara', 23, 33),
    new Popelushka('Mara', 26, 36),
    new Popelushka('Anna', 27, 37),
    new Popelushka('Nina', 28, 38),
    new Popelushka('Asha', 22, 34),
    new Popelushka('Lora', 29, 35),
    new Popelushka('Rosa', 25, 36),
    new Popelushka('Alisa', 27, 38),

]
console.log(popelushkaArr);

class Prince {

    constructor(name, age, findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe;
    }
}

let prince = new Prince('John', 25, 33);

const lovers = (popelushkaArr, prince) => {
    for (const popelushka of popelushkaArr) {
        if (prince.findShoe === popelushka.legSize) {
            return console.log(popelushka)
        }
    }

}
lovers(popelushkaArr, prince);

let lovers2 = popelushkaArr.find(popelushka => {
    return popelushka.legSize === prince.findShoe
})
console.log(lovers2);