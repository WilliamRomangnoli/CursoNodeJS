const fs = require ("fs");

console.log ((process.hrtime()[0]/60).toFixed(5));
console.log ("antes da leitura do arquivo");

const dados = fs.readFileSync ("arquivo.txt");

console.log ("Executando o console apos o arquivo");

console.log ((process.hrtime()[0]/60).toFixed(5));
