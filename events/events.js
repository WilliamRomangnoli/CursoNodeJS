const eventEmitter = require ('events')

class Evento extends eventEmitter {}
const meuEvento = new Evento()

meuEvento.on('seguranca', (x,y)=>{
    console.log(`Exec o evento 'seguranca': ${x} ${y}`)
})

meuEvento.emit('seguranca', 'userAdmin', 'Alterou salario')