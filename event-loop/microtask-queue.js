// process.nextTick(() => {
//     console.log('nextTick queue');
// })
// Promise.resolve().then(() => {
//     console.log('Promise queue');
// });
process.nextTick(() => console.log('next tick 1'));
process.nextTick(() => {
    console.log('next tick 2');
    process.nextTick(() => console.log('next tick inside another next tick'));
})
process.nextTick(() => console.log('next tick 3'));

Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => {
    console.log('Promise 2');
    process.nextTick(() => console.log('next tick inside promise then block '));
})
Promise.resolve().then(() => console.log('Promise 3'));