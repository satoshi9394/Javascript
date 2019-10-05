

const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde   = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMONIVEL = 10



class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguenteNivel() , 500);
        
    }

    inicializar() {
        this.siguenteNivel= this.siguenteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde,
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(ULTIMONIVEL).fill(0).map(n=> Math.floor(Math.random() * 4))
    }

    siguenteNivel() {
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    transformarColorAnumero(color) {
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }



    iluminarSecuencia() {
        for (let i=0; i < this.nivel; i++ ){
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout( () => this.iluminarColor(color), 1000 * i) 
            
        }
    }


    iluminarColor (color){
        this.colores[color].classList.add('light')
        console.log(color)
        setTimeout(() => this.apagarColor(color), 400)
    }


    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click',   this.elegirColor)
    }

    eleminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click',   this.elegirColor)
    }



    elegirColor(ev){
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorAnumero(nombreColor)
        this.iluminarColor(nombreColor)
        
        if (numeroColor === this.secuencia[this.subnivel]) {
            this.subnivel ++ 
            if (this.subnivel === this.nivel) {
                this.nivel ++
                this.eleminarEventosClick()
                if (this.nivel === (ULTIMONIVEL + 1)){
                    //Gano!!
                }else{
                    setTimeout(this.siguenteNivel, 1000)
                }

            }
        }else {
            //perdio
        }

    }




}



function empezarJuego() {    
    window.juego = new Juego()
}


