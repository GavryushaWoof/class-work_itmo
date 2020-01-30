const events = require('events');

const eventEmitter = new events.EventEmitter();
eventEmitter.on('click', function(num) {
    console.log('Сработало событие клик ' + num)
});
eventEmitter.on('click', function(num) {
    console.log('Сработало событие клик ' + num)
});
eventEmitter.emit('click', 5);