/*jshint esversion: 6 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/BigDataVuelos', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.log("Hay un error en la conexion de la DB"));
