const express = require('express');
const mongoose = require('mongoose');

const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion base de datos.

mongoose.connect("mongodb+srv://carloslondono:MisionTic2022*@clusterc4g41.dwgr1.mongodb.net/ejegrupo41db?retryWrites=true&w=majority");

// Operaciones crud

app.use(route);
app.listen(3000, ()=> {
    console.log("Servido  corriendo en el puerto 3000")
});