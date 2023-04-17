const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
})

router.post('/notes/new-note', (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if(!title) {
        errors.push({text: 'por favor inserte o escriba un titulo'});
    }
    if(!description) {
        errors.push({text: 'por favor inserte una descripcion'});
    }
    if(errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        res.send('ok');
    }
    
});

router.get('/notes', (req, res) => {
    res.send('notes desde la base de datos');
});

module.exports = router;