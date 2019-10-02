
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

/* const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`   cuando solo querias traer uno xd*/
const opts =  { crossDomain: true }

const onRespose = function(persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}


function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url , opts , onRespose )
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)


