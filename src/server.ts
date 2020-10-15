import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST ,PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (lista, item)
// POST = Criando uma informação nova
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: https://localhost:3333/users?search=diego
// Route Params: https://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

app.listen(3333);

// Driver nativo, Query builder, ORM