const express = require('express');
require('dotenv').config();
const cors = require('cors');


const { dbConnection } = require('./database/config')

// Crear servidor express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();


// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
})

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en el puerto,', process.env.PORT);
})