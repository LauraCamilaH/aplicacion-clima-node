const axios = require('axios');


const getClima = async (lat, lon )=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa2c952cac04ab70bd39f8e90d43b968
    &units=metric`)



    return resp.data.main.temp;
}

module.exports = {
    getClima
}
