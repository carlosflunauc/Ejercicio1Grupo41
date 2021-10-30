const express = require('express');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion base de datos.

