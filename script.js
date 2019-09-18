
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lopez',
    edad: 28,
    ingeniero : false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false,
}

var juan = {
    nombre: 'Juan',
    apellido: 'Guisardo',
    edad: 10,
}


function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }

    if (persona.cocinero){
        console.log('Cocinero')
    }else{
        console.log('No es Cocinero')
    }
    if (persona.cantante){
        console.log('Cantante')
    }else{
        console.log('No es Cantante')
    }
    if (persona.dj){
        console.log('DJ')
    }else{
        console.log('No es DJ')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }else{
        console.log('No es Guitarrista')
    }
    if (persona.drone){
        console.log('Vuela Drone')
    }else{
        console.log('No es piloto de Drone')
    }
    
    
}

imprimirProfesiones(sacha)

const MAYORIA_DE_EDAD = 18



const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = persona => !esMayorDeEdad(persona)

function ImprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad por que tiene ${persona.edad} años`)
    }else{
        console.log(`${persona.nombre} es menor de edad por que tiene ${persona.edad} años`)
    }
}


ImprimirSiEsMayorDeEdad(sacha)


function permitirAceso(persona){
    if (!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

