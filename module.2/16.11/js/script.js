let arr = new Array();
let arrl = [];

console.log(arr);
console.log(arrl);

let lessons = ['история', 'химия', 'математика'];
console.log(lessons);
console.log(lessons[0]);
console.log(lessons[1]);
console.log(lessons[2]);

console.log(lessons[89]); //undefined

lessons[2] = 'русский язык';
console.log(lessons);

lessons[90] = 'литература';
console.log(lessons);

let lessonsLength = lessons.length;
console.log(lessonsLength)

lessons = ['история', 'химия', 'математика'];

for (let i = 0; i < lessons.length; i++) {
    console.log('Lessons: ' + lessons[i]);
}

//стек
let temp = lessons.pop(); //забирает и возвращает верхнее значение (последнее)
console.log(temp);
console.log(lessons);
lessons.push('литература'); //кладет значение сверху (в конец)
console.log(lessons);

//очередь
temp = lessons.shift(); //забирает из начала массива
console.log(temp);
lessons.unshift('физкультура'); //вставляет из начала массива
console.log(lessons);

/*console.time('1000000 push/pop');
let test = [];
for (let i = 0; i < 1000000; i++) {
    test.push();
}
for (let i = 0; i < 1000000; i++) {
    test.pop();
}

console.timeEnd('1000000 push/pop');
console.time('1000000 unshift/shift');
let test2 = [];
for (let i = 0; i < 1000000; i++) {
    test.unshift();
}
for (let i = 0; i < 1000000; i++) {
    test.shift();
}

console.timeEnd('1000000 unshift/shift');
*/

lessons.length = 2;
console.log(lessons);
lessons.length = 3;
console.log(lessons);

let str = '+7-921-567-81-46';
let arr2 = str.split('-');
console.log(arr2);

let str2 = arr2.join(' ');
console.log(str2);

lessons = ['история', 'химия', 'математика'];
temp = lessons.splice(1, 2);
console.log(lessons);
console.log(temp);

lessons = ['история', 'химия', 'математика'];
temp = lessons.slice(0, 2);
console.log(lessons);
console.log(temp);
console.log(lessons === temp);

lessons = ['история', 'химия', 'математика'];
lessons.reverse();
console.log(lessons);

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];
let arrC = arrA.concat(arrB);
console.log(arrC);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][1]); //5


let wtrArr = [1, true, 'adff', [23, 45]];
console.log(wtrArr);
for (let i = 0; i < wtrArr.length; i++) {
    console.log(typeof wtrArr[i]);
    if (Array.isArray(wtrArr[i])) {
        console.log(wtrArr[i] + ' это массив');
    }
}

arrA = [1, 2, 3];
arrB = [4, 5, 6];
arrC = [];
arrC.push(arrB);
arrA.push(arrB);
let a = arrA.concat(arrC);
arrA[arrA.length] = arrB;
console.log(arrA);
console.log(arrA.indexOf(2));

lessons = ['история', 'химия', 'математика'];
console.log(lessons.includes('химия'));

let pics = ['image.jfif', 's1200.jfif', 'zhivotnye-leopardy-leopard-morda-usy-vzg-353463.jpg'];
for (let i = 0; i < pics.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('src', '../img/' + pics[i]);
    document.getElementById('slider').appendChild(img); //добавляет последнего ребенка в див
}

let arrNum = [2, 3, 7, 13, 5, 0, 20];
let min = arrNum[0],
    max = arrNum[0],
    sum = arrNum[0];
for (let i = 1, len = arrNum.length; i < len; i++) {
    if (arrNum[i] > max) {
        max = arrNum[i]
    } else if (arrNum[i] < min) {
        min = arrNum[i];
    }
    sum += arrNum[i];
}
console.log(min, max, sum / arrNum.length);
arrNum.pop();
arrNum.shift();
console.log(arrNum);
delete arrNum[1];
console.log(arrNum);
arrNum[2] = undefined;
console.log(arrNum);


arrNum = [2, 3, 7, 13, 5, 0, 20];
console.log(arrNum);
for (let i = 0; i < arrNum.length; i++) {
    for (let j = 0; j < arrNum.length - 1 - i; j++) {
        if (arrNum[j] < arrNum[j + 1]) { //> если поставить этот знакбудет от меньшего к большему
            let temp = arrNum[j];
            arrNum[j] = arrNum[j + 1];
            arrNum[j + 1] = temp;
        }
    }
}
console.log(arrNum);