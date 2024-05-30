const fs = require('node:fs');

// fs.readFile('./test.txt', 'utf-8', () => {
//     console.log('this is io queue');
// });

// process.nextTick(() => console.log('this is nexTick'));
// Promise.resolve().then(() => console.log('this is Promise'));

// setTimeout(() => {
//     console.log('this is setTimeout');
// }, 0);

// fs.readFile('./test.txt', 'utf-8', () => {
//     console.log('this is io queue');
// });

//When running setTimeout with delay Oms and an I/O async method, the order of execution can never be guaranteed

fs.readFile(__filename, () => console.log('This is readFile operation'));

process.nextTick(() => console.log('this is nextTick'));
Promise.resolve().then(() => console.log('this is Promise then block'));
setTimeout(() => console.log('this is setTimeout'), 0);