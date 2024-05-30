const fs = require('node:fs');

// //synchronous way of reading file
const fileDetails = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileDetails);

//asynchronous way of reading file
const asyncFileDetails = fs.readFile('./file.txt', 'utf-8', (error, data) => {
    console.log(error ? error : data);
});

//synchronous way of writing file
fs.writeFileSync('./greet.txt', 'Hello World');

//asynchronous way of writing file
fs.writeFile('./greet.txt', ' Hello World', { flag: "a" }, (error) => {
    console.log(error ? error : "Done writing");
});
