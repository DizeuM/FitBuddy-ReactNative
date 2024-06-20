const express = require('express');
const router = express.Router();
const exercicioController = require('../controllers/exercicioController');

// Rotas para CRUD de exercicios
router.post('/exercicios', exercicioController.createExercicio);
router.get('/exercicios', exercicioController.getAllExercicios);
router.get('/exercicios/:id', exercicioController.getExercicioById);
router.put('/exercicios/:id', exercicioController.updateExercicio);
router.delete('/exercicios/:id', exercicioController.deleteExercicio);

module.exports = router;
