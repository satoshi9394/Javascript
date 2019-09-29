var sasha = {
    nombre: 'Sacha',
    apellido: 'Lopez',
    altura: 1.72,
    cantidadDeLibros: 78
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Ortiz',
    altura: 1.62,
    cantidadDeLibros: 50
}


var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    altura: 1.85,
    cantidadDeLibros: 100
}


var alan = {
    nombre: 'Alan',
    apellido: 'Salto',
    altura: 1.80,
    cantidadDeLibros: 89
}


var ricardo = {
    nombre: 'Ricardo',
    apellido: 'Gonzales',
    altura: 1.50,
    cantidadDeLibros: 65
}


var angel = {
    nombre: 'Angel',
    apellido: 'Santillan',
    altura: 1.75,
    cantidadDeLibros: 47
}


var personas = [sasha , pedro, juan, alan, ricardo, angel]

const reducer = (acum, { cantidadDeLibros }) => 
    acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)





console.log(`En total todos tienen ${totalDeLibros} libros`)