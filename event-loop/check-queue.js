const fs = require('node:fs');

// fs.readFile(__filename, () => console.log('This is readFile operation'));

// process.nextTick(() => console.log('this is nextTick'));
// Promise.resolve().then(() => console.log('this is Promise then block'));
// setTimeout(() => console.log('this is setTimeout'), 0);
// setImmediate(() => console.log('this is setImmediate'), 0);
//I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete

// fs.readFile(__filename, () => {
//     console.log('This is readFile operation');
//     setImmediate(() => console.log('this is setImmediate inside the readfile method'), 0);
// });

// process.nextTick(() => console.log('this is nextTick'));
// Promise.resolve().then(() => console.log('this is Promise then block'));
// setTimeout(() => console.log('this is setTimeout'), 0);
// Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I / O queue callbacks are executed

// fs.readFile(__filename, () => {
//     console.log('This is readFile operation');
//     setImmediate(() => console.log('this is setImmediate inside the readfile method'), 0);
//     process.nextTick(() => console.log('this is nextTick inside readFile'));
//     Promise.resolve().then(() => console.log('this is Promise then block inside readFile'));
// });

// process.nextTick(() => console.log('this is nextTick'));
// Promise.resolve().then(() => console.log('this is Promise then block'));
// setTimeout(() => console.log('this is setTimeout'), 0);

setImmediate(() => console.log('this is setImmediate 1'));
setImmediate(() => {
    console.log('this is setImmediate 2');
    Promise.resolve().then(() => console.log('this is Promise then block inside setImmediate'));
    process.nextTick(() => console.log('this is nextTick inside setImmediate'));

});
setImmediate(() => console.log('this is setImmediate 3'));
