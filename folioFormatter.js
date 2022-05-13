// Se encarga de pasar dar formato al folio con caracteres y numero de digitos.

const parametros = require('./parametros')

function folioFormatter(numero) {
  const {digitos, caracterRelleno} = parametros
  return numero.toString().padStart(digitos,caracterRelleno)
}

module.exports = folioFormatter