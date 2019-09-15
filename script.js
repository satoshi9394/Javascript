
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lista',
    edad: 28,
}

var dario = {
    nombre: 'Dario',
    apellido: 'lopez',
    edad: 30,
}




function imprimir_Mayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toLocaleUpperCase())
}

imprimir_Mayusculas(sacha)
imprimir_Mayusculas(dario)


function imprimir_nombre_edad (persona) {
    var {nombre,edad}=persona
    console.log('Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años')
}

imprimir_nombre_edad(sacha)
imprimir_nombre_edad(dario)