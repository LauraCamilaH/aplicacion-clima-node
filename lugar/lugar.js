const axios = require('axios');

const getLugarLatLon = async (dir) => {

    const encondedUrl = encodeURI(dir);
    console.log("encode::: ", encondedUrl)


  

    const respuesta = await axios.get (`https://nominatim.openstreetmap.org/search?q=${encondedUrl}&format=json`);  
    
    if (respuesta.data.length === 0 ){
        throw new Error(`No hay resultado para ${dir}`)
    }

    const data = respuesta.data[0];
    const direccion = data.display_name
    const lat = data.lat
    const lon = data.lon
        return{
            direccion,
            lat,
            lon,
        }
}

module.exports = {
    getLugarLatLon
}
