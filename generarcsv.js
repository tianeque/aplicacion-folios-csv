const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const {folios, nombreArchivo, cabecera} = require('./folios');

const csvWriter = createCsvWriter({
  header: cabecera,
  path: './folios-exportar/' + 'F' + nombreArchivo + '.csv'
});

const records = folios
csvWriter.writeRecords(records)       // returns a promise
.then(() => {
    console.log('Se ha creado el archivo ' + 'F' + nombreArchivo + '.csv');
});