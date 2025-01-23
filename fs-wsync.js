const fs = require ("fs");

console.log ((process.hrtime()[0]/60).toFixed(5));
console.log ("antes da leitura do arquivo");

const dados = fs.readFileSync(arquivo.txt,(err,data)=>{
    if err throw err;
    console.log("executando leitura")
});

console.log ((process.hrtime()[0]/60).toFixed(5));
console.log ("antes da leitura do arquivo");

