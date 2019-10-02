
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

/* const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`   cuando solo querias traer uno xd*/
const opts =  { crossDomain: true }




function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url , opts , callback).fail(function() {
        console.log(`Sucedio un error interno en el servidor.
        No se pudo obtener la respuesta id:${id} `)
    })
}

obtenerPersonaje(1, function (personaje)  {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2,function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function(personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)
                })
            })
        })
    })
})




