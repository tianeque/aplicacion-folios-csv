// Módulo encargado de realizar validaciones a los parametros.
// Se reaizarán las siguientes validaciones
// 1.- Verificar que el parametro desde sea menor que hasta
// 2.- la cantidad de filas del array debe ser un entero
// 3.- Advertencia acerca del ajuste a talonarios de 50 hojas

const parametros = require('./parametros')

const {nombre,desde,hasta,moldes,digitos,caracterRelleno,sobrantes,tamanoPaso,ruta} = parametros


const isValid = () => {
  const tal50 = (((hasta - desde + 1)/moldes)%50)

  // 1.-
    if (desde >= hasta) {
      console.log('El folio hasta debe ser mayor que el folio desde')
      return false
    } else if (!Number.isInteger((hasta - desde + 1) / moldes)) {
      console.log("Los parametros no cuadran")
      return false
    } else {
      if (tal50) {
        console.log("Warning: No se ajusta a talonarios de 50 folios: " + "Resto=" + (hasta - desde + 1)%50 === 0)
      }
      console.log("Configuracion correcta de folios")
      return true
    }
}

console.log(isValid())

module.exports = isValid()