const fs = require('node:fs');
const zlib = require('node:zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
    encoding: "utf-8",
    highWaterMark: 2
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'));

const writeableStream = fs.createWriteStream('./greet.txt');

//using pipes we can combine these two streams without using the events

readableStream.pipe(writeableStream);
//But we can't do chain this since the point of start of stream should be a duplex transform or readable now it is writeable stream

//We can achieve this with the help of zlib module