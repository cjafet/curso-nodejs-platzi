var events = require('events');
var myemitter = new events.EventEmitter();

myemitter.on('product_sold', () => {
    console.log('Produto vendido');
})

myemitter.emit('product_sold');