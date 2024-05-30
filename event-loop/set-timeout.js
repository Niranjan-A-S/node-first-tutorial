// setTimeout(() => console.log('This is setTimeout 1'), 0);
// setTimeout(() => {
//     console.log('This is setTimeout 2');
//     process.nextTick(() => console.log('this is next tick inside setTimeout'));
// }, 0);
// setTimeout(() => console.log('This is setTimeout 3'), 0);

// process.nextTick(() => console.log('this is next tick 1'));
// process.nextTick(() => {
//     console.log('this is next tick 2');
//     process.nextTick(() => console.log('this is next tick inside another next tick'));
// });
// process.nextTick(() => console.log('this is next tick 3'));

// Promise.resolve().then(() => console.log('this is Promise 1'));
// Promise.resolve().then(() => {
//     console.log('this is Promise 2');
//     process.nextTick(() => console.log('this is next tick inside promise then block '));
// })
// Promise.resolve().then(() => console.log('this is Promise 3'));

setTimeout(() => console.log('This is setTimeout 1'), 1000);
setTimeout(() => console.log('This is setTimeout 2'), 500);
setTimeout(() => console.log('This is setTimeout 3'), 0);
//Follows the FIFO