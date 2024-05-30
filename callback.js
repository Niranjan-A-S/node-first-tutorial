const callback = (name) => `Hello ${name}`;

const higherOrderFunction = (callback) => callback('Vishwas');

console.log(higherOrderFunction(callback));