

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
}
Persona.prototype.soyAlto = () => this.altura > 1.8



var sasha = new Persona('Sacha', 'Lopez',1.75)
var arturo = new Persona('Arturo', 'Santillan', 1.89)
var angel = new Persona('Angel', 'Gonzales', 1.79)


sasha.soyAlto()
arturo.soyAlto()
angel.soyAlto()


