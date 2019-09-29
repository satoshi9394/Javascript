var sasha = {
    nombre: 'Sacha',
    apellido: 'Lopez',
    altura: 1.72
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Ortiz',
    altura: 1.62
}


var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    altura: 1.85
}


var alan = {
    nombre: 'Alan',
    apellido: 'Salto',
    altura: 1.80
}


var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Gonzales',
    altura: 1.50
}


var angel = {
    nombre: 'Angel',
    apellido: 'Santillan',
    altura: 1.75
}


var personas = [sasha , pedro, juan, alan, ricardo, angel]

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    })

var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms)