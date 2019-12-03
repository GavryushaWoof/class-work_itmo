let example = document.querySelector('.example');
console.log(example.offsetParent);

console.log(example.offsetLeft);
console.log(example.offsetTop);

//contant +padding + border
console.log(example.offsetWidth);
console.log(example.offsetHeight);

console.log(example.clientLeft);
console.log(example.clientTop);
//contant +padding
console.log(example.clientWidth);
console.log(example.clientHeight);

console.log(example.scrollWidth);
console.log(example.scrollHeight);

console.log(example.scrollLeft);
console.log(example.scrollTop);


console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

console.log(window.pageXOffset);
console.log(window.pageYOffset);

//прокрутки
//абсолютная
example.scrollTo(0, 76);
//относительно текущего положения
example.scrollBy(0, -70);
//прокрутка до видимости элемента
document.querySelector('.lighter').scrollIntoView(true);

//координаты элемента относительно документа
let rect = example.getBoundingClientRect();
console.log(rect.top); //Y верхней границы
console.log(rect.left); //Х левой границы
console.log(rect.bottom); //Y нижней границы
console.log(rect.right); //Х правой границы

let style = window.getComputedStyle(example);
console.log(style);

function my_func(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.pageX);
    console.log(e.pageY);
}

function func2(e) {
    console.log('Обработчик клика');
}

example.onclick = func2;
example.addEventListener('click', function() { alert('еще одна') }, false);