//const isValid = require('./validaciones')
const parametros = require('./parametros')
const folioFormatter = require('./folioFormatter')


function headersCsv({moldes}) {
  const cabecera = []
  for (let i = 0; i < moldes; i++) {
    cabecera.push(i+1)
  }
  return cabecera
}

function folios(parametros) {
  
  const {desde, hasta, moldes, sobrantes, tamanoPaso} = parametros
  const folios = []
  const rango = hasta - desde + 1
  const foliosPorMolde = rango / moldes / tamanoPaso

  //Folios
  for (let i = 0; i < foliosPorMolde; i++) {
    const folio = []
    for (let j = 0; j < moldes; j++) {

      numero = i + desde + j * foliosPorMolde 
      
      const folioFormateado = folioFormatter(numero)
      folio.push(folioFormateado)
    }
    objFolio = folios.push(folio)
  }

  //sobrantes
  for (let i = 0; i < sobrantes; i++) {
    const folio = []
    for (let j = 0; j < moldes; j++) {
      folio.push(' ')
    }
    objFolio = folios.push(folio)
  }
  

  return folios
}

module.exports.folios = folios(parametros)
module.exports.cabecera = headersCsv(parametros)


