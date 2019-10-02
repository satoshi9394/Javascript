
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

/* const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`   cuando solo querias traer uno xd*/
const opts =  { crossDomain: true }




function obtenerPersonaje(id) {
    return new Promise( function (resolve , reject) {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id) }`

        $.get(url , opts , function(data) {
            resolve(data)
        })
        .fail( () => reject(id) )
    })
}

function onError(id) {
    console.log(`El personaje con Id:${id} no se pudo obtener `)
}


obtenerPersonaje(1)
    .then(function(personaje) {
        console.log(`El personaje 1 es: ${ personaje.name }`)
    })
    .catch( function(id) {
        onError(id)
    })









