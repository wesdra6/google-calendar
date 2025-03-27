require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/googleRoutes');

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
