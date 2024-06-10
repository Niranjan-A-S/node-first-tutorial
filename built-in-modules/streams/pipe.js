const fs = require('node:fs');

// const readableStream = fs.createReadStream('./1.txt', {
//     encoding: "utf-8",
//     highWaterMark: 2
// });

// const writeableStream = fs.createWriteStream('./2.txt');

// readableStream.pipe(writeableStream);
//the pipe method  returns the writeable stream

const zlib = require('node:zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./1.txt', {
    encoding: "utf-8",
    highWaterMark: 2
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./2.txt.gz'));