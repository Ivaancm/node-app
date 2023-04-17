const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res) => {
    res.render()
})

router.get('/notes', (req, res) => {
    res.send('notes desde la base de datos');
});

module.exports = router;