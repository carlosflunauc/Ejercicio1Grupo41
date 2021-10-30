const express = require('express');
const mongoose = require('mongoose');
const UsuarioSchema = require("./Modelos/Usuario.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexion base de datos.

mongoose.connect("mongodb+srv://carloslondono:MisionTic2022*@clusterc4g41.dwgr1.mongodb.net/ejegrupo41db?retryWrites=true&w=majority");

// Operaciones crud
router.get('/', (req, res) => {
    res.send("Este es el incio de mi primera API");
});

// Insertar

router.post('/Usuario', (req, res) =>{
    let nuevoUsuario = new UsuarioSchema({
        idUsuario: req.body.id,
        nombreUsuario: req.body.nombre,
        telefonoUsuario: req.body.telefono,
        ciudadUsuario: req.body.ciudad
    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Usuario Almacenado")
    })
})

app.use(router);
app.listen(3000, ()=> {
    console.log("Servido  corriendo en el puerto 3000")
});