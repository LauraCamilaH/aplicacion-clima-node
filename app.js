
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima ',
        demand: true
    }

}).argv;

console.log(argv)
console.log("argv", argv.direccion)


//lugar.getLugarLatLon(argv.direccion)
// .then(console.log)
//.catch(console.log)

  
// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async (direccion )=>{
    try {
    const coords = await lugar.getLugarLatLon(direccion)
    const temperatura =  await clima.getClima(coords.lat, coords.lon)
    return `Èl clima de ${coords.direccion} es de ${temperatura} grados centigrados `
    } catch (error) {
        return `no se puedo determinar el clima de ${direccion}`
    }
    
}


getInfo(argv.direccion)
    .then( console.log)
    .catch(console.log)