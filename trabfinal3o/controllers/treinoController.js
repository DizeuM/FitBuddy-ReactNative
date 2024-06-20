const  Treino  = require('../models/treino');

// Controlador para criar um novo treino
exports.createTreino = async (req, res) => {
  try {
    const treino = await Treino.create(req.body);
    res.status(201).json(treino);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter todos os treinos
exports.getAllTreinosPorUsuario = async (req, res) => {
  try {
    const userId = req.params.id
    const treinos = await Treino.findAll({
        where: {
            user_id: userId
        }
    });
    res.status(200).json(treinos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter um treino por ID
exports.getTreinoById = async (req, res) => {
  try {
    const treino = await Treino.findByPk(req.params.id);
    if (treino) {
      res.status(200).json(treino);
    } else {
      res.status(404).json({ error: 'Treino not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para atualizar um treino por ID
exports.updateTreino = async (req, res) => {
  try {
    const treino = await Treino.findByPk(req.params.id);
    if (treino) {
      await treino.update(req.body);
      res.status(200).json(treino);
    } else {
      res.status(404).json({ error: 'Treino not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para deletar um treino por ID
exports.deleteTreino = async (req, res) => {
  try {
    const treino = await Treino.findByPk(req.params.id);
    if (treino) {
      await treino.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Treino not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
