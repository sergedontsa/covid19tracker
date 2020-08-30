import L from 'leaflet'

const position = [51.505, -0.09]
const map = L.map('map').setView(position, 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)



const getArray = (array, object) =>{
        for(let x in  object){
            if (x !== 'continent' || x !== 'countries') {
                array.push(object[x])
            }
        }
        return array
}

export default getArray;
