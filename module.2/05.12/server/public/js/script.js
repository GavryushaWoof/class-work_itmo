// import { myUtils } from 'http//84.201.1334.133:8080/js/myUtils.js';
import { myUtils } from './myUtils.js';
let mass = [1, 2, 3, 4, 5, 6];
console.log(mass.toString());
myUtils.remove(mass, 5);
console.log(mass.toString());

let str = 'bnmfw';
let new_srt = myUtils.repeat(str, 3);
console.log(new_srt);

let arr2 = [{
        name: 'Sasha',
        age: 12
    },
    {
        name: 'Sasha',
        age: 40
    },
    {
        name: 'Sasha',
        age: 74
    },
];
console.log(myUtils.pluck(arr2, 'age'));

let num1 = 10,
    num2 = 20;
setTimeout(function() {
    myUtils.sum(num1, num2,
        function(res) {
            console.log(res);
        });
}, 5000);