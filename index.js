// index.js

const express = require('express');
const dotenv = require('dotenv');

// Carrega variáveis do .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware (se necessário)
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
