const express = require('express');
const cepController = require('./controller/CepController');

const app = express();

const PORT = 3000;

app.use('/lookup', cepController);

app.listen(PORT, ()=>{console.log(` escutando porta ${PORT}`)});
