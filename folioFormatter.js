const parametros = require('./parametros')

function folioFormatter(numero) {
  const {digitos, caracterRelleno} = parametros
  return numero.toString().padStart(digitos,caracterRelleno)
}

module.exports = folioFormatter