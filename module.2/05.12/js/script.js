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
        age: 12
    },
    {
        name: 'Sasha',
        age: 12
    },
];
console.log(myUtils.pluck(arr2, 'age'));

let obj = [{ a: 1 }, { b: 2 }];
let deep = _.cloneDeep(obj);
let deep2 = Object.assign([], obj);
console.log(obj[0] === deep[0]);
console.log(obj[0] === deep2[0]);

let line1 = {
    x: [],
    y: [],
    type: 'scatter'
};

function calcY(x) {
    let y;
    if (x <= 2) {
        y = 50 * x;
    } else {
        y = 100 * (2 ** (-8 * (x - 2) / 107) + 2 ** (8 * ((x - 2) / 107 - 1)));
    }
    return y;
}

for (let i = 0; i <= 100; i++) {
    line1.x.push(i);
    line1.y.push(calcY(i));
}

let layout = {
    title: 'Кривая',
    xaxis: {
        title: 'муд',
        showgrid: false,
        zeroline: false
    },
    yaxis: {
        title: 'оп',
        zeroline: false
    }
}

Plotly.newPlot('placeholder', [line1], layout);