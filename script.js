
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lopez',
    edad: 25,
    peso: 75,
}

console.log(`Al inicio del año ${ sacha.nombre } peso ${ sacha.peso }kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1;  i<=365; i++ ) {
    var random = Math.random()

    if (random< 0.25){
        aumentarDePeso(sacha)
    }else if (random < 0.5  ) {
        adelgazar(sacha)
    }
}




console.log(`Al final del año ${ sacha.nombre } peso ${ sacha.peso.toFixed(1) }kg`)

if (sacha.peso > 75 ) {
    console.log(`${sacha.nombre} subio de peso`)
}else if(sacha.peso == 75){
    console.log(`${sacha.nombre} permanecio con el mismo peso`)
}else{
    console.log(`${sacha.nombre} bajo de peso`)
}