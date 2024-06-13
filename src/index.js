const express = require('express');
const { getData } = require('./controllers/dataController');

const app = express();
const PORT = 3000;

app.get('/consulta-dados', getData);

app.get('/liveness', (req, res) => res.send('OK'));
app.get('/readiness', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
