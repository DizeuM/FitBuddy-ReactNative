const express = require('express');
const router = express.Router();
const treinoController = require('../controllers/treinoController');

// Rotas para CRUD de treinos
router.post('/treinos', treinoController.createTreino);
router.get('/treinos/usuario/:id', treinoController.getAllTreinosPorUsuario);
router.get('/treinos/:id', treinoController.getTreinoById);
router.put('/treinos/:id', treinoController.updateTreino);
router.delete('/treinos/:id', treinoController.deleteTreino);

module.exports = router;
