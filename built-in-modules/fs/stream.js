const fs = require('node:fs');

const readableStream = fs.createReadStream('./file.txt', {
    encoding: "utf-8",
    highWaterMark: 2
});

const writeableStream = fs.createWriteStream('./greet.txt');

readableStream.on('data', (chunk) => { //here the readable stream extends the Eventemitter class
    console.log(chunk);
    writeableStream.write(chunk)
})