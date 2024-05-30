const crypto = require("node:crypto");

//Synchronous
// const start = Date.now();

// crypto.pbkdf2sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2sync("password", "salt", 10000, 512, "sha512");
// crypto.pbkdf2sync("password", "salt", 10000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);

//Asynchronous

process.env.UV_THREADPOOL_SIZE = 10;
const MAX_CALL = 10;
const start = Date.now();

for (let index = 0; index < MAX_CALL; index++) {
    crypto.pbkdf2("password", "salt", 10000, 512, "sha512", () => {
        console.log('Hash:', index, Date.now() - start);
    });
};
//These loops are executed in separate thread pool and not in a single thread