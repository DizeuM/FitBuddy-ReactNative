const express = require('express');
const router = express.Router();
const atividadeController = require('../controllers/atividadeController');

// Rotas para CRUD de atividades
router.post('/atividades/criar', atividadeController.createAtividade);
router.get('/atividades/usuario/:id', atividadeController.getAllAtividadesPorUsuario);
router.get('/atividades', atividadeController.getTodasAtividades);
router.put('/atividades/:id', atividadeController.updateAtividade);
router.delete('/atividades/:id', atividadeController.deleteAtividade);

module.exports = router;
