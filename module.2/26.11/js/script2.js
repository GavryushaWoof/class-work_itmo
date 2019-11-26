let obj = new Object();
let obj2 = {};
let num = 123;

let article = {
    id: 1,
    title: 'фотография',
    author: 'петр',
    description: 'описание',
    ' ': 'asdfg',
    null: null,
    true: true,
    'null': 1,
    [1 + 2]: 3,
    num,
};
console.log(article);
console.log(article.id);
console.log(article.title);
console.log(article.author);
console.log(article.description);
console.log(article[' ']);
console.log(article.null); //если 2 одинаковых то останется последний //1
console.log(article[true]);
console.log(article[3]); //3
console.log(article.num); //123

article.img = '/img.jpg';
console.log(article);
console.log(article.img);
article.img = '/img2.jpg';
console.log(article.img);
delete article.img; // если положить просто undefined, то он останется висеть, на проверке будет true
console.log(article);

console.log('img' in article);
console.log('num' in article);

if ('title' in article) {
    console.log(article.title);
}

console.log(article.hasOwnProperty('title')); //еще одни способ проверить есть ли у объекта это свойство

for (let key in article) {
    console.log(key + ' ' + article[key]);
}

let arr4 = [1, 2, 3, 4, 5]; //так же можно с массивом
arr4.sasha = '123';
for (let key in arr4) {
    console.log(key + ' ' + arr4[key]);
}

console.log(Object.keys(article).includes('123'));
console.log(Object.keys(article)); // только ключи
console.log(Object.entries(article)); //пары ключ и значение
console.log(Object.values(article)); //только значения

//массив из объектов
let articles = [{
    id: 1,
    title: 'JS',
    description: '...',
    author: 'Mike',
}, {
    id: 2,
    title: 'PHP',
    description: '...',
    author: 'Mike',
}, {
    id: 3,
    title: 'HTLM',
    description: '...',
    author: 'Sasha',
}];

getData(articles, 'author', 'Mike');
console.log(getData(articles, 'author', 'Mike'));
console.log(getData(articles, 'id', '3'));

function getData(arr, propName, propValue) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][propName] == propValue) {
            arrRes.push(arr[i]);
        }
    }
    return arrRes;
}

//деструктаризация ES6

let userData = ['root', '123', '56', 'Peter'];
/*
let login =userData[0];
let pass =userData[1];
let age =userData[2];
let name =userData[3];
*/
//вместо вверхнего теперь можно писть в одну строчку
let [login, pass, age, name] = userData;
console.log(login);
let { id, title: xxx, description } = articles[0];
console.log(xxx);

function someFunc({ id, title: xxx, description }) {
    console.log(id);
    console.log(xxx);
    console.log(description);
}
someFunc(articles[0]);

let menu = {
    items: [{
        label: 'о нас',
        href: '/about.html',
        items2: [{
            label: 'о продуктах',
            href: '/about.html',
        }, {
            label: 'о услугах',
            href: '/aboutself.html',
        }]
    }, {
        label: 'о вас',
        href: '/aboutself.html',
    }]
};

let olol = {
    al: 1,
    bl: 2,
    cl: {
        dl: 3,
        el: 4,
    }
};

let { al, bl, cl: { dl, el: f } } = olol;
console.log(al);
console.log(bl);
console.log(dl);
console.log(f);

let x1 = 23,
    x2 = 32;
[x2, x1] = [x1, x2];
console.log(x1);
console.log(x2);