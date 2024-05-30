const fs = require('node:fs/promises');

// console.log(1);

// fs.readFile('./file.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// console.log(2);

// const readFile = async () => {
//     try {
//         const data = await fs.readFile('./file.txt', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// };

// readFile();

// fs.writeFile('./file.txt', ' Hello', { flag: 'a' })
//     .then(data => console.log("Done"))

const writeFile = async () => {
    try {
        await fs.writeFile('./greet.txt', 'Test', { flag: 'a' })
    } catch (error) {
        console.log(error);
    }
}

writeFile();