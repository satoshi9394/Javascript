
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




function imprimir_Mayusculas({ nombre }) {
    console.log(nombre.toLocaleUpperCase())
}

imprimir_Mayusculas(sacha)
imprimir_Mayusculas(dario)
