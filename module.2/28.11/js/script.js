let user1 = {
    name: 'Sasha',
    age: 23,
};
let user2 = user1;
user2.name = 'Masha';
console.log(user1.name);

//пример клонирование первого уровня
let user3 = {};
for (let key in user1) {
    user3[key] = user1;
}
user3.name = 'Dasha';
console.log(user1.name);
console.log(user3.name);

//Альтернатива
let user4 = {};
Object.assign(user4, user1);
user4.name = 'Sasha';
console.log(user1.name);
console.log(user4.name);

//Альтернатива 2
let user5 = {...user1 };
user5.name = 'Pety';
console.log(user1.name);
console.log(user5.name);

var x = 1; //глобальная переменная
let y = 2; //глобальная переменная

function displaySquare(z) { //z локальная переменная
    let result = x * y * z;
    console.log(result);
}

displaySquare(3); //6

console.dir(displaySquare);

/* работает но так лучше не делать zzz улетела в в глобальную
function display() {
    zzz = 123;
    console.log(zzz);
}

display();
*/
/*
let numl = 3,
    numl2 = 4;

function display2() {
    console.log(numl); //undefined
    var numl = 10;
    console.log(numl); //10
    console.log(numl2); //error
    let numl2 = 8;
    console.log(numl2); //8 выше не полезет искать
}

display2();
*/

//замыкание
function outName(name, lastname) {
    function getName() {
        return name + ' ' + lastname;
    }
    return getName;
}
let getName = outName('Иван', 'Иванов');
console.log(getName);
console.log(getName());

//задача написать функцию  счетчик которая считает сколько раз ее вызывают
function createCounter() {
    let i = 0;
    return function() {
        return ++i;
    }
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
let counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

//шаблоны каррирование
function diff(a) {
    return function(b) {
        return a - b;
    }
}

console.log(diff(3)(2));

let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(function() {
        return i;
    });
}
console.log(arr[0]());
console.dir(arr[0]);
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());
console.log(arr[4]());


function myFunc() {
    return this;
}
console.log(myFunc());

//метод объекта 
let myObj = {
    propA: 27,
    getA: function() {
        return this.propA;
    }
}
console.log(myObj.getA());

let user = {
    name: 'Sasha',
    getUserName() {
        return this.name;
    }
}
console.log(user.getUserName());

let func = user.getUserName;
console.log(func());
console.log(func.call({ name: 'pet' }));
console.log(func.apply(user));

let arr2 = [1, 2, 3];
console.log(Math.min.call(null, 1, 2, 3));
console.log(Math.min.apply(null, arr2));
console.log(Math.min(...arr2));
console.log(Math.min.call(null, ...arr2));

//рекурсия
function writeN(n) {
    if (n >= 0) {
        console.log(n);
        writeN(n - 1);
    }
}

writeN(3);


let arr5 = [1, 2, 3, 11, 22, 33];
arr5.sort((n1, n2) => {
    if (n1 > n2) {
        return 2;
    } else if (n1 < n2) {
        return -2;
    } else {
        return 0;
    }
});
console.log(arr5);