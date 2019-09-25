
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lopez',
    edad: 25,
    peso: 75,
}

console.log(`Al inicio del año ${ sacha.nombre } peso ${ sacha.peso }kg`)

const INCREMENTO_PESO = 0.3
const PESO_INICIAL = sacha.peso
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META= sacha.peso - 3
var dias = 0

while (sacha.peso > META ) {
    if(comeMucho()) {
        aumentarDePeso(sacha)
    }
    if(realizaDeporte()) {
        adelgazar(sacha)
    }
    dias += 1
}




console.log(`Pasaron  ${ dias } dias hasta que ${ sacha.nombre} adelgazo 3kg`)

if (sacha.peso > PESO_INICIAL ) {
    console.log(`${sacha.nombre} subio de peso`)
}else if(sacha.peso == PESO_INICIAL){
    console.log(`${sacha.nombre} permanecio con el mismo peso`)
}else{
    console.log(`${sacha.nombre} bajo de peso`)
}