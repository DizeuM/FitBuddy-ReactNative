// controllers/atividadeController.js
const Atividade = require('../models/atividade');

// Controlador para criar uma nova atividade
exports.createAtividade = async (req, res) => {
  try {
    const atividade = await Atividade.create(req.body);
    res.status(201).json(atividade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter todas as atividades
exports.getAllAtividadesPorUsuario = async (req, res) => {
  try {
    const userId = req.params.id
    const atividades = await Atividade.findAll({
        where: {
            user_id: userId
        },
        order: [
          ['createdAt', 'DESC']
        ]

    });
    res.status(200).json(atividades);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter uma atividade por ID
exports.getTodasAtividades = async (req, res) => {
  try {
    const atividades = await Atividade.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    });  // Fetch all activities from the database
    res.status(200).json(atividades);  // Return the activities in the response
  } catch (error) {
    res.status(400).json({ error: error.message });  // Return any errors that occur
  }
};

// Controlador para atualizar uma atividade por ID
exports.updateAtividade = async (req, res) => {
  try {
    const atividade = await Atividade.findByPk(req.params.id);
    if (atividade) {
      await atividade.update(req.body);
      res.status(200).json(atividade);
    } else {
      res.status(404).json({ error: 'Atividade not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para deletar uma atividade por ID
exports.deleteAtividade = async (req, res) => {
  try {
    const atividade = await Atividade.findByPk(req.params.id);
    if (atividade) {
      await atividade.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Atividade not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
