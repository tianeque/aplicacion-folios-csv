const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const {folios, cabecera} = require('./folios');
const parametros = require('./parametros');
const {ruta} = parametros

const nombreArchivo = (parametros)=> {
  const {ruta, nombre, desde, hasta, moldes} = parametros
  let nombreDeSalida
  if (nombre === "") {
    nombreDeSalida = `folio ${desde} al ${hasta} ${moldes} moldes`
    nombreDeSalida = ruta + 'F' + nombreDeSalida + '.csv'
  } else {
    nombreDeSalida = ruta + 'F' + nombre + '.csv'
  }
  return nombreDeSalida
}

const csvWriter = createCsvWriter({
  header: cabecera,
  path: nombreArchivo(parametros)
});

const records = folios

csvWriter.writeRecords(records)       // returns a promise
.then(() => {
    console.log('Se ha creado el archivo ' + 'F' + nombreArchivo(parametros) + '.csv');
});