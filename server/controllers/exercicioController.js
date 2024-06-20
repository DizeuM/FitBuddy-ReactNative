const  Exercicio  = require('../models/exercicio');

// Controlador para criar um novo exercício
exports.createExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.create(req.body);
    res.status(201).json(exercicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter todos os exercícios
exports.getAllExercicios = async (req, res) => {
  try {
    const exercicios = await Exercicio.findAll();
    res.status(200).json(exercicios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter um exercício por ID
exports.getExercicioById = async (req, res) => {
  try {
    const exercicio = await Exercicio.findByPk(req.params.id);
    if (exercicio) {
      res.status(200).json(exercicio);
    } else {
      res.status(404).json({ error: 'Exercicio not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para atualizar um exercício por ID
exports.updateExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.findByPk(req.params.id);
    if (exercicio) {
      await exercicio.update(req.body);
      res.status(200).json(exercicio);
    } else {
      res.status(404).json({ error: 'Exercicio not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para deletar um exercício por ID
exports.deleteExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.findByPk(req.params.id);
    if (exercicio) {
      await exercicio.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Exercicio not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
