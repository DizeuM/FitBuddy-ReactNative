const express = require('express');
const router = express.Router();
const setController = require('../controllers/setController');

// Rotas para CRUD de sets
router.post('/sets', setController.createSet);
router.get('/sets/treino/:id', setController.getAllSetsPorTreino);
router.get('/sets/:id', setController.getSetById);
router.put('/sets/:id', setController.updateSet);
router.delete('/sets/:id', setController.deleteSet);

module.exports = router;
