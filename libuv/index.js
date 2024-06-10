const fs = require("node:fs/promises");

// (async () => {
//     console.log('Start');
//     const data = await fs.readFile('./file.txt', { encoding: 'utf-8' });
//     console.log(data);
//     console.log("End");
// })();

// (() => {
//     console.log('Start');
//     fs.readFile('./file.txt', { encoding: 'utf-8' }).then(data => {
//         console.log(data);
//     });
//     console.log("End");
// })();