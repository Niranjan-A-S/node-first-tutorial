import http from 'node:http';
import fs, { createReadStream, ReadStream } from 'node:fs';

const server = http.createServer((req, res) => {
    // res.writeHead(200, { "Content-type": "text/plain" });
    // res.end('Response from server');
    // res.writeHead(200, { "Content-type": "application/json" });
    // res.end(JSON.stringify([{ T: "Test" }]));
    res.writeHead(200, { "Content-type": "text/html" });
    // const html = fs.readFileSync('./index.html', 'utf-8'); //here the async operation is not used because we need to read the content before the response is sent
    // res.end(html);
    //another way is to make use of the stream 
    fs.createReadStream('./index.html').pipe(res);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
