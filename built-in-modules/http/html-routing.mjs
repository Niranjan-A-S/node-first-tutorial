import http from 'http'

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': {
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end('Home Page');
        };
            break;
        case '/about': {
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end('About Page');
        };
            break;
        case '/api': {
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(JSON.stringify({ test: 'Test' }));
        };
            break;
        default: {
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.end('Page not Found');
        };
            break;
    };
});

server.listen(3000, () => console.log('Server Running on Port 3000'));