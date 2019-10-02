
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}` 
const opts =  { crossDomain: false }

const onRespose = function(luke) {
    console.log(`hola yo soy ${luke.name}`)
}

$.get(lukeUrl , opts , onRespose )
