const  Set  = require('../models/set');

// Controlador para criar um novo set
exports.createSet = async (req, res) => {
  try {
    const set = await Set.create(req.body);
    res.status(201).json(set);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter todos os sets de um treino específico
exports.getAllSetsPorTreino = async (req, res) => {
  try {
    const treinoId = req.params.id;
    const sets = await Set.findAll({
        where: {
            treino_id: treinoId
        }
    });
    res.status(200).json(sets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter um set por ID
exports.getSetById = async (req, res) => {
  try {
    const set = await Set.findByPk(req.params.id);
    if (set) {
      res.status(200).json(set);
    } else {
      res.status(404).json({ error: 'Set not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para atualizar um set por ID
exports.updateSet = async (req, res) => {
  try {
    const set = await Set.findByPk(req.params.id);
    if (set) {
      await set.update(req.body);
      res.status(200).json(set);
    } else {
      res.status(404).json({ error: 'Set not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para deletar um set por ID
exports.deleteSet = async (req, res) => {
  try {
    const set = await Set.findByPk(req.params.id);
    if (set) {
      await set.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Set not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
