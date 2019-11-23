//регулярные выражения

let str7 = "Я люблю JS";
let regExp = new RegExp("лю", "");
let resul = str7.search(regExp);
console.log(resul); //2

regExp = /Лю/i;
resul = str7.search(regExp);
console.log(resul);

str7 = "ОЙ-ой-ой";
regExp = /ОЙ/ig;
console.log(str7.match(regExp));
console.log("khgjkk".replace(/k/ig, "h"));

str7 = "привет мир";
regExp = /мир/i;
console.log(regExp.test(str7));

str7 = "ОЙ-ой-ой";
regExp = /ОЙ/ig;

// console.log(regExp.exec(str7));
// console.log(regExp.exec(str7));
// console.log(regExp.exec(str7));
// console.log(regExp.exec(str7));
// console.log(regExp.exec(str7));

let r;
while (r = regExp.exec(str7)) {
    console.log(`${r.index} ${r[0]}`);
}
//. любой символ кроме \n
regExp = /CS.4/s
console.log("CSS4".match(regExp));
console.log("CS-4".match(regExp));
console.log("CS 4".match(regExp));
console.log("CS\n4".match(regExp));

//диапозоны

str7 = "Жили были"
regExp = /[жб][иы]ли/ig;
console.log(str7.match(regExp));

str7 = "Саша + Маша так же как Даша + Паша";
regExp = /[А-Я]аша/ig;
console.log(str7.match(regExp));

str7 = "этот компьютер обошелся нам 100000 руб."
regExp = /[^а-я .]/ig; // птичка означает не
console.log(str7.match(regExp));

str7 = "My name is Alex";
regExp = /\w\w\s\w\w\w\w/ig;
console.log(str7.match(regExp));
regExp = /\b\w\w\b/ig;
console.log(str7.match(regExp));
regExp = /\w\w/ig;
console.log(str7.match(regExp));
//алтерация ИЛИ(|)
str7 = "MEVN стек включает: HTML, CSS, JS";
regExp = /(HTML|CSS|JS)/ig;
console.log(str7.match(regExp));
//квантификаторы
//+ {1,} один раз и более сколь угодно 
str7 = "10005000 попугаев съели 50000 бананов";
regExp = /^\d+/ig; //тут птичка обозначает начало предложения
console.log(str7.match(regExp));
// regExp = /\D/ig;
// console.log(str7.match(regExp));

str7 = "10005000 попугаев съели 50000 бананов";
regExp = /\D+$/ig; //$ конец предложения 
console.log(str7.match(regExp));
regExp = /[а-я]+$/ig; //что бы впереди пробел убрать 
console.log(str7.match(regExp));

//* {0,} от нуля и более раз
str7 = "100 10 1"
regExp = /10*/ig;
console.log(str7.match(regExp));

//? {0,1}от нуля до одного
str7 = "Привет. Приветик."
    // regExp = /[а-я]{6}И?к?/ig;
regExp = /[а-я]{6}(ик)?/ig;
console.log(str7.match(regExp));
str7 = "Я взрослый (18+)"
    // regExp = /\(\d+\+\)/ig;
regExp = /\(\d{2}\+\)/ig; //когда точно знаем сколько раз
console.log(str7.match(regExp));


//задача проверка телефонного номера вида : 
//7 (921) 911-51-97
str7 = "7 (921) 911-51-97";
regExp = /7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
console.log(str7.match(regExp));
console.log(regExp.test(str7));

//задача 
//ifmo@ifmo.ru
str7 = "ifmo@ifmo.ru";
regExp = /(\w+\.?)+@(\w+\.)+\w+/;
console.log(str7.match(regExp));
console.log(regExp.test(str7));

str7 = '"Ведьма" раоао "метла"';
regExp = /"[а-я]+"/ig;
console.log(str7.match(regExp));
regExp = /".+?"/ig;
console.log(str7.match(regExp));