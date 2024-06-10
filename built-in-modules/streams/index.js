//!there are 4 types of streams

/**
 * Readable Streams from which data can be read. (reading from a file, network request)
 * Writable Streams to which data can be written. (writing to a file, network response)
 * Duplex Streams that are both readable and writable. (sockets)
 * Transform streams that can modify or transform the data as it is written or read. (file compression)
 */

const fs = require('node:fs');

// the stream is in paused mode by default
const readableStream = fs.createReadStream('./1.txt', {
    encoding: "utf-8",
    highWaterMark: 2 //size of the chunks that is getting transferred, default is 64kb, here we are setting it to 2
});

const writableStream = fs.createWriteStream('./2.txt', {
    encoding: 'utf-8'
});

//on attaching the event listener the stream is in flowing mode
readableStream.on("data", (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
})