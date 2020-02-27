console.log('script start');

setImmediate(() => {
    console.log('setImmediate');
});

const interval = setInterval(() => {
    console.log('setInterval 1')
    Promise.resolve().then(() => {
        console.log('promise +');
    })
}, 0);

setTimeout(() => {
    console.log('setTimeout 1')
    Promise.resolve().then(() => {
        console.log('promise 3')
    }).then(() => {
        console.log('promise 4')
    }).then(() => {
        setTimeout(() => {
            console.log('setTimeout 2')
            Promise.resolve().then(() => {
                console.log('promise 5')
            }).then(() => {
                console.log('promise 6')
            }).then(() => {
                clearInterval(interval);
            })
        }, 0)
    })
}, 0)

Promise.resolve().then(() => {
    console.log('promise 1')
}).then(() => {
    console.log('promise 2')
});

process.nextTick(function() {
    console.log('nextTick 1');
    process.nextTick(function() {
        console.log('nextTick 2');
        Promise.resolve().then(() => {
            console.log('promise ++')
        });
    });
});