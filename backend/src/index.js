const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* TIPOS DE PARÂMETROS
* Query params: parâmetros nomeados enviados na rota após "?" (filtros paginação) (request.query)
* Route params: parâmetros utilizados para identificar recursos (request.params)
* Request body: corpo da requisição, utilizado para criar ou alterar um recurso (request.body)
*/

app.listen(3333);

