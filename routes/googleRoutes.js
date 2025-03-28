const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

router.get('/auth', (req, res) => {
    // Lógica de autenticação aqui
});

router.post('/events', (req, res) => {
    // Lógica para criar eventos aqui
});

module.exports = router;
