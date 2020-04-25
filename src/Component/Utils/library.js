
const getArray = (array, object) =>{
        for(let x in  object){
            if (x !== 'continent' || x !== 'countries') {
                array.push(object[x])
            }
        }
        return array
}

export default getArray;
