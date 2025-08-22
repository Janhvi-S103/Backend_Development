const fs = require('fs');

const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

readStream.pipe(writeStream);

readStream.on('end', () => {
  console.log("File copied successfully using pipe!");
});

readStream.on('error', (err) => {
  console.error("Error reading input file:", err);
});

writeStream.on('error', (err) => {
  console.error("Error writing output file:", err);
});
