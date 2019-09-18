
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lopez',
    edad: 10,
    ingeniero : false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false,
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


function ImprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad por que tiene ${persona.edad} años`)
    }else{
        console.log(`${persona.nombre} es menor de edad por que tiene ${persona.edad} años`)
    }
}


ImprimirSiEsMayorDeEdad(sacha)