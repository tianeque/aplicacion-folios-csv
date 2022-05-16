//Si el campo nombre esta vacio entonces el modulo "folios.js" se encarga de crear el parametro nombre.


const parametros = () => {
  return(
    {
      nombre: "",
      desde: 5001,
      hasta: 7000,
      moldes: 2,
      digitos: 6,
      caracterRelleno: '0',
      sobrantes: 2,
      tamanoPaso: 1,
      ruta: '/Users/sebastiancastillo/Creative Cloud Files/Trabajos/'
    }
  )
}





module.exports = parametros()
