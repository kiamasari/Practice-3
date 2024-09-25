'use strict';

// задание 1

let price = prompt('Стоимость товара?');
let priceBuy = prompt('Скоко деняк??');

if(price < 0 && priceBuy < 0) {
    alert('Ошибка');
}else if(price == priceBuy) {
    alert('Покупка совершена');
}else if(price>priceBuy) {
    let dol = price - priceBuy;
    alert(`Для покупки не хватает ${dol} р.`);
}else {
    let sdacha = priceBuy - price;
    alert(`Покупка совершена. Остаток ${sdacha} р.`);
}

// задание 2

let n = Number(prompt('Введите число'));

if(n > 0){
    alert(1)
}else if (n < 0){
    alert(-1)
}else if (n == 0){
    alert(0)
}

// задание 3

let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

// задание 4

let message = login == 'Сотрудник' ? 'Привет' :
login == 'Директор' ? 'Здравствуйте' :
login == '' ? 'Нет логина' : "";

// задание 5

let login = prompt("Ваш логин");
if (login == "Админ") {
    let password = prompt("Пароль");
    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if(password == null){
        alert('Отменено');
    } else{
        alert('Я вас не знаю');
    }
} else if (login == null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}