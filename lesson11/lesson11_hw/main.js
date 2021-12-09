// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let fm1 = document.forms.fm1;
fm1.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    console.log(name, age);
    localStorage.setItem('userInfo', JSON.stringify({name, age}));
}


// -створити форму з інпутами для model,type та volume автівки.
//при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let fm2 = document.forms.fm2;
fm2.onsubmit = function (e) {
    e.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model, type, volume};
    console.log(car);

    let cars = [];
    if (!cars) {
        cars.push(car);
        localStorage.setItem('carInfo', JSON.stringify(cars));
    } else {
        cars.push(car);
        localStorage.setItem('carInfo', JSON.stringify(cars));
    }


}