

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
}

var sasha = new Persona('Sacha', 'Lopez',1.75)
sasha.saludar()
var arturo = new Persona('Arturo', 'Santillan', 1.80)

arturo.saludar()