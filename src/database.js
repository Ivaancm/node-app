const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/notes-db-app', {
    useNewUrlParser: true
})
    .then(db => console.log('conexion a la base correctamente'))
    .catch(err => console.error(err));