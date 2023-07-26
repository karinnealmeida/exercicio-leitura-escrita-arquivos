const express = require('express');
const { listagemProdutos, vendas } = require('./controladores/vendas');

const app = express();

app.use(express.json());

app.get('/produtos', listagemProdutos);
app.post('/produtos', vendas);

app.listen(3000);