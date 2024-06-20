const express = require('express');
const router = express.Router();
const historicoController = require('../controllers/historico_usuarioController');

// Rotas para CRUD de histórico de usuário
router.get('/historicos/usuario/:id', historicoController.getAllHistoricosPorUsuario);
router.get('/historicos/:id', historicoController.getHistoricoById);
router.post('/historicos', historicoController.createHistorico);
router.delete('/historicos/:id', historicoController.deleteHistorico);

module.exports = router;