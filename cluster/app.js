const OS = require('node:os');
const cluster = require('node:cluster');
const http = require('node:http')

if (cluster.isMaster) {
    console.log(`Master Process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    const server = http.createServer((req, res) => {
        console.log(`Worker  ${process.pid} started`);
        res.writeHead(200, {
            'Content-type': 'plain / text'
        })
        if (req.url === '/') {
            res.end('Home Page')
        }
        if (req.url === '/slow') {
            for (let index = 0; index < 1000000; index++) {
                res.end('Slow Page')
            }
        }
    })
    server.listen(3000, () => console.log('Server running'));
}
