let g = 2;
let h = 3;
let res = sum(g, h);
console.log(res);

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function greeting(userName = 'user') {
    console.log('Hello ' + userName);
}

greeting();
greeting('Sasha');

function greeting2(userName) {
    if (!userName) {
        console.log('Не заданно имя пользователя');
        return;
    }
    console.log('Hello ' + userName);
}

greeting2();
greeting2('Kate');

function getMin(num1, num2) {
    if (!num1 || !num2) {
        console.log('Числа не преданы');
        return;
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Преданные данные не числа !');
        return;
    }
    return (num1 < num2) ? num1 : num2;
}

console.log(getMin(5, 6));

let arr = [1, 2];

function arrSum(someArr) {
    if (!Array.isArray(someArr)) {
        console.log('Передали не массив');
        return;
    }
    let sum = 0;
    for (let i = 0; i < someArr.length; i++) {
        sum += someArr[i];
    }
    return sum;
}

console.log(arrSum(arr));

function printUserInfo() {
    console.log(arguments);
    console.log(arguments[0]);
}
printUserInfo('sasha', '18', '+7613112313');


function min() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
fdd = [1, 2, 4, 5, 3];
console.log(min(...fdd));

function printUserInfo2(name, age, ...arrOther) {
    console.log(name);
    console.log(age);
    console.log(arrOther);
    console.log(arguments);
}

printUserInfo2('sasha', '18', '+7613112313', 'jgkkgjlks', 'bjsbjkn');

//анонимные функции -функциональные выражения
// console.log(subNums(10, 25)); если вызвать тут  то ошибка

let subNums = function(a, b) {
    return a - b;
};
console.log(subNums(10, 25));

+

function(a, b) {
    console.log(a - b);
}(20, 30);

// стрелочные функции =>
subNums = (a, b) => a - b; //subNums = (a, b) => {a - b};
console.log(subNums(10, 25));

/*function delay(cb) {
    setTimeout(() => {
        cb();
    }, 2000);
}

delay(() => {
    console.log('Какой- то текст');
});
*/