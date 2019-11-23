// Литералы - констванты
// 1
// 1,23
// true
// "sdfdd"

// if(условие){
//  набор инструкций которое выполниться если условие true
// }

let checked = false;
if (checked) {
    console.log(checked);
}
console.log("checked: " + checked);

let age = 23;
if (age < 18) {
    console.log("Вы не можете попатьсна сайт!");
} else {
    console.log("Добро пожаловать!");

}
let season = "summer";
if (season === "summer") {
    document.body.style.backgroundColor = "green";
} else if (season === "winter") {
    document.body.style.backgroundColor = "white";
} else if (season === "autumn") {
    document.body.style.backgroundColor = "yellow";
} else if (season === "spring") {
    document.body.style.backgroundColor = "orange";
} else { console.log("Не корректный сезон!!"); }


// Логические операторы
// || оператор ИЛИ
let day = "воскресенье"
if (day === "суббота" || day === "воскресенье") {
    console.log("Ура выходной");
}

//&& логическая И
let a = 12,
    b = 56,
    c = 45;
if (c > a && c < b) {
    console.log("c между a и b");
}

//! логическое НЕ
if (!checked) {
    console.log("checked = false");
}
let j;
let g = (j = 1, 2, 3);
console.log(g);
console.log(j);


let num = 2;
switch (num) {
    case 1: //num===1
        console.log(1);
        break;
    case 2: //num===2
        console.log(2);
        break;
    default:
        console.log("что-то")
}
switch (true) {
    case num === 1:
        console.log(1);
        break;
    case num === 2:
        console.log(2);
        break;
    default:
        console.log("что-то")
}

let ticketNumber = "22222";
switch (ticketNumber) {
    case "1111111":
        console.log("1111111");
        break;
    case "22222":
    case "33333":
        console.log("22222");
        break;
    default:
        console.log("что-то")
}

//Операторы циклы

//цикл с предусловием 
//while(условие){тело цикла}
// let dfr = null;
// while (dfr !== "admin") {
//     dfr = prompt("Введите пароль");
// }


//Цикл с постусловием
a = 5;
do {
    console.log(a);
    a--;
} while (a);

//Цикл for
// for(инициализация счетчика; условие продолжения; изменение счетчика){тело цикла}
let atteptCount = 5;
let answer = 456;
for (let i = 0; i < atteptCount; i++) {
    let data = prompt("Введите код");
    if (parseInt(data) === answer) {
        alert("Вы угадали");
        break;
    } else {
        alert("Осталось попыток " + (atteptCount - i - 1));
    }
}

for (let i = 0; i < 10; i++) {
    if (i % 2) continue;
    console.log(i);
} // четные от 0 до 9

//Расчет зп
//Оклад
//кол-во раб д
//кол-во от д
let salary = +prompt("Ваш оклад"),
    workingDays = +prompt("Кол-во раб. дней в текущем месяце"),
    colOtrDays = +prompt("Кол-во от. дней в текущем месяце"),
    result;

result = salary / workingDays * colOtrDays * 0.87;
alert("Ваша зп " + result);
alert(`Ваша зп ${result}`); //апострофы

//меню
let lang = +prompt("Выберете язык: \n 1 Русский \n 2 Английский \n 3 Немецкий", "1");
switch (lang) {
    case 1:
        alert("Добро пожаловать")
        break;
    case 2:
        alert("Welcome");
        break;
    case 3:
        alert("Willcommen");
        break;
    default:
        alert("Очень жаль будет русский")
}

//рассчитать сумму чисел от 1 до 100
let m = 0
for (let i = 1; i < 101; i++) {
    m += i;
}
console.log(m);

//вывсти таблицу зебра
// let rowTemplate = `<tr><td style = "background-color:${color}">100</td></tr>`;
// let template = `<table>${content}</table>`;
let content = " ";
for (let i = 0; i < 20; i++) {
    let color = "white";
    if (i % 2 === 0) {
        color = "gray"
    }
    content += `<tr><td style = "background-color:${color}">100</td></tr>`;
}
document.write(`<table>${content}</table>`);