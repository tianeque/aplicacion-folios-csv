
const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('HTML')
})

app.listen(port, () => {
  console.log('Aplicacion ejecutandose en el puerto: ' + port)
})

app.use(express.static('public'))
