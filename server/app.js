const express = require('express');
const sequelize = require('./database');
require('dotenv').config();
const User = require('./models/User');
const historico_usuario = require('./models/historico_usuario');
const atividade = require('./models/atividade');
const treino = require('./models/treino');
const exercicio = require('./models/exercicio');
const set = require('./models/set')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());
app.use(cors());

// Rotas (adicione suas rotas aqui)
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
const historicoRoutes = require('./routes/historico_usuarioRoutes');
app.use('/api', historicoRoutes);
const atividadeRoutes = require('./routes/atividadeRoutes');
app.use('/api', atividadeRoutes);
const exercicioRoutes = require('./routes/exercicioRoutes');
app.use('/api', exercicioRoutes);
const treinoRoutes = require('./routes/treinoRoutes');
app.use('/api', treinoRoutes);
const setRoutes = require('./routes/setRoutes');
app.use('/api', setRoutes);

sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
    // Aqui você pode continuar com a inicialização da sua aplicação
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelos:', err);
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});