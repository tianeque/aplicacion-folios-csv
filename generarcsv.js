const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const {folios, nombreArchivo, cabecera} = require('./folios');
const parametros = require('./parametros');
const {ruta} = parametros

const csvWriter = createCsvWriter({
  header: cabecera,
  path: ruta + 'F' + nombreArchivo + '.csv'
});

const records = folios
csvWriter.writeRecords(records)       // returns a promise
.then(() => {
    console.log('Se ha creado el archivo ' + 'F' + nombreArchivo + '.csv');
});