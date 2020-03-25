const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// cors({origin: 'http://meuapp.com'}) <= Metodo usado para quando for para produção.
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
