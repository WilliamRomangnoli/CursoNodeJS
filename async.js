function sum (x) {
    return new Promise ((resolve, reject)=>{
        if(Number (x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject(' ta brincando ? So aceito numeros cara!')
        }
        setTimeout(()=>{
            resolve(x + 5000);
          },3000);
    }) 
}

async function main(){
    try {
        const resultado = await sum('#');
        console.log (`Resultado com Async/Await: ${resultado}`)
    } catch (error) {
        console.log(`temos um erro: ${error}`)
        console.log(process.env.USERNAME)
    }
}

main();