class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }
    soyAlto() {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolldor/a `)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo (nombre , apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido} `)
    if (esDev) {
        console.log(`Vaya no sabia que eras programador/a`)
    }
}




var sasha = new Persona('Sacha', 'Lopez',1.75)
var arturo = new Persona('Arturo', 'Santillan', 1.89)
var angel = new Desarrollador('Angel', 'Gonzales', 1.79) 

sasha.saludar()
arturo.saludar(responderSaludo)
angel.saludar(responderSaludo)


