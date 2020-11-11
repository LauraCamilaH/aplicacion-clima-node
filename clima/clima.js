const axios = require('axios');


const getClima = async (lat, lon )=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=63e2af951924597e5e4ca7dc3859c42d&units=metric`)

    

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
