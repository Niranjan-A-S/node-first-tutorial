const buffer = new Buffer.from('Niranjan');

buffer.write('Code')
console.log(buffer.toJSON());
console.log(buffer);
console.log(buffer.toString());

