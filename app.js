const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo, 'creado con exito!'.bgBlue ) )
    .catch( err => console.log( err, 'Error del sistema' ))



