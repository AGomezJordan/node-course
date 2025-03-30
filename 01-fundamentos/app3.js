const fs = require('fs');
const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;
const reactWordCount = content.split('react').length - 1;

console.log(`Palabras: ${wordCount}`);
console.log(`Palabras react: ${reactWordCount}`);