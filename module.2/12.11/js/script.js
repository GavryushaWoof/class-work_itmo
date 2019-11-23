// "use stripct";

console.log("Выводимая информация");
// Оъявление пременной
var login;
let password;

// определение прееменной
login = "admin";
password = "12345678"

console.log(login);
// переопределить или переписать значение
ljgin = 1234;




// инициалтзация переменной
// константы
const CONST_VALUE = 10;

// alert(3 + 2 + 1);
// [1, 2] fotEache(alert);
// числа
let hidgt = 123;
let widht = 123.45;
//  строки

let srtt = "строка";
let srtt2 = "строка2";

console.log(srtt);
console.log(srtt2);

// логический
let active = true;
let stopped = false;

// знаение не определено
let unknowValue = null;
console.log(unknowValue);

// значение не присвоенно
let undefinedValue = null;
console.log(undefinedValue);
console.log(typeof active);


console.log(widht);
let q = parseInt("123jjj");
console.log(q);
let f = parseFloat("12.3fhfhf");
console.log(f);

// Операторы
// Арифметические операторы
// + - * / %
// **
// - (унарный минус)
let num = 3 % 2;
console.log(num); //1

let num2 = 40;
console.log(num * num2); //40
// Котивация строк
console.log(2 + "5"); //"25"

console.log(+"2" + 5); //7
console.log("2" + "sad"); //"2sad"
console.log(5 / "d"); //Nan - не число

console.log(isNaN("ast")); //true
console.log(isNaN("2")); ///false
console.log(isNaN("2en")); //true
console.log(isNaN("2e1")); //false
console.log(isNaN(45)); //false
console.log(isNaN(true)); //false
console.log(isNaN(false)); //false

console.log(5 / 0); //Infinity
console.log(-5 / 0); //-Infinity
console.log(isFinite(5 / 0)); //false


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Операторы присваевания
// = += -= *= /= %=
let a = 10;
a += 20;

// операторы сравнения
// > < >= <=
// == равенстро === строгое равенство != неравенство !== строгое неравенство

console.log(num > num2); //false
console.log(num !== num2); //true
console.log("20" == 20); //true
console.log("20" === 20); //false

// операторы инкремент ++ и декремент --

num_1 = 2;
console.log(++num_1); //3

num_2 = 2;
console.log(num_2++); //2
console.log(num_2); //3

let i = 2;
i = i++;
console.log(i);

// ?: (условие)?выражение_1:выражение_2

let t = -5;
let res = (t < 0) ? -t : t;
console.log(res); //5

let data = prompt("введите данные", " ");
console.log(data);


let answer = confirm("Вам есть 18?")
console.log(answer);