console.log(document);
console.dir(document);

console.log(document.body);

let elem = document.getElementById('list');
console.log(elem);

console.log(elem.childNodes); //все узлы (будет видно переносы в HTML)
console.log(elem.children); //только теги

console.log(elem.firstChild); // первый ребенок
console.log(elem.lastChild); // последний ребенок

console.log(elem.firstElementChild); // первый тег
console.log(elem.lastElementChild); // последний тег


console.log(elem.previousSibling); // предыдущий
console.log(elem.nextSibling); // следующий

console.log(elem.previousElementSibling); // предыдущийтег
console.log(elem.nextElementSibling); // следующий тег

console.log(elem.parentNode); // родительский узел
console.log(elem.parentElement); // родительский тег узел

//поиск по id
// let list = document.getElementById('list');
// list.style.backgroundColor = 'red';
// console.log(list);
//поиск по тегу
let liAll = list.getElementsByTagName('li');
for (let i = 0; i < liAll.length; i++) {
    liAll[i].style.color = 'rgb(' + rnd() + ',' + rnd() + ',' + rnd() + ')';
    console.log(liAll[i]);
}

function rnd() {
    return Math.floor(Math.random() * 255);
}
console.log(liAll);

//поиск по имени
let inpu = document.getElementsByName('data');
console.log(inpu);
//ПО СЛАССУ
let elemS = list.getElementsByTagName('some-class');
console.log(elemS);
//ПО СЕЛЕКТОРУ
let q1 = list.querySelector('ul>li');
console.log(q1);
let q2 = list.querySelectorAll('ul>li');
console.log(q2);
let q3 = document.querySelectorAll('.some-class');
console.log(q3);
let q4 = document.querySelectorAll('input[type=text]');
console.log(q4);



//работа с атрибутами
//проверка на существование
console.log(list.hasAttribute('id'));
//получить атрибут
console.log(list.getAttribute('id'));
console.log(list.children[0].getAttribute('class'));
//задать атрибут
list.setAttribute('data-id', '1');
list.setAttribute('style', 'border: 1px solid black;');

console.log(list);
console.log(list.id);
console.log(list.tagName);

//style
console.log(list.style);
console.log(list.style.border);

//class
list.classList.add('green'); //добавляет
list.classList.add('big');
console.log(list.classList);
list.classList.remove('big'); //удаляет
console.log(list.classList);
console.log(list.classList.contains('green')); //проверяет наличие
console.log(list.classList.toggle('small')); //если нет добавит если нет уберет
console.log(list.classList);
console.log(list.classList.toggle('small'));
console.log(list.classList);

//создание новых тегов
let newElem = document.createElement('li');
console.log(newElem);
let text = document.createTextNode('Elem');
console.log(text);

newElem.appendChild(text);
//добавление элементов
list.children[0].appendChild(newElem);

// let nav = document.getElementById('nav');
console.log(nav);

let ul = document.createElement('ul');
nav.appendChild(ul);

let li = document.createElement('li');
li.innerHTML = '<a href="#">О нас</a>';
ul.appendChild(li);

let li2 = document.createElement('li');
li2.innerHTML = '<a href="#">Продукты</a>';
ul.prepend(li2);
ul.prepend(li);
ul.removeChild(li2);

console.log(table);
console.log(table.rows);
console.log(table.rows[0].cells);

//тайменр
// let i = 0;

// function showAletr() {
//     alert('всем привет');
//     if(i++<10)
//     setTimeout(showAletr, 2000);
// }
// showAletr()
// let i = 0;
// let idTimer

// function showAletr() {
//     alert('всем привет');
//     idTimer = setInterval(showAletr, 2000);
//     if (i++ >= 10) {
//         clearInterval(idTimer);
//         clearTimeout(idTimer);
//     }
// }
// showAletr()

//Даты
let myDate = new Date();
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getYear());
console.log(myDate.getMinutes());
console.log(myDate.getTime()); //с 1 января 1970 кол-во милисек
let myDate2 = new Date();
console.log(myDate2 - myDate);