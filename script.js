
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



var ids = [1,2,3,4,5,6,7]
/* var promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
}) */

var promesas = ids.map( id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)













/* obtenerPersonaje(1)
    .then( (personaje) => {
        console.log(`El personaje 1 es: ${ personaje.name }`)
        return obtenerPersonaje(2)
    })
    .then( (personaje) => {
        console.log(`El personaje 2 es: ${ personaje.name }`)
        return obtenerPersonaje(3)
    })
    .then( (personaje) => {
        console.log(`El personaje 3 es: ${ personaje.name }`)
    })
    .catch( (id) => {
        onError(id)
    }) */









