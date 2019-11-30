let str = 'мир пир';
let query = 'дир';
let tempAll = '';

for (let i = 0; i < query.length; i++) {
    let temp = '';
    for (let j = 0; j < query.length; j++) {
        if (i === j) {
            temp += '.';
        } else {
            temp += query[j];
        }
    }
    tempAll += '(' + temp + ')';
    if (i !== query.length - 1) {
        tempAll += '|';
    }
}

console.log(tempAll);
let regExp = new RegExp(tempAll, 'ig');
console.log(str.match(regExp));