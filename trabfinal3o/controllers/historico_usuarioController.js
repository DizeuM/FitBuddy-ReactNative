const { where } = require('sequelize');
const HistoricoUsuario = require('../models/historico_usuario');

// Controlador para criar um novo histórico de usuário
exports.createHistorico = async (req, res) => {
  try {
    const historico = await HistoricoUsuario.create(req.body);
    res.status(201).json(historico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter todos os históricos de usuário
exports.getAllHistoricosPorUsuario = async (req, res) => {
  try {
    const userId = req.params.id
    const historicos = await HistoricoUsuario.findAll({
        where: {
            user_id: userId
        }
    });
    res.status(200).json(historicos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para obter um histórico de usuário por ID
exports.getHistoricoById = async (req, res) => {
  try {
    const historico = await HistoricoUsuario.findByPk(req.params.id);
    if (historico) {
      res.status(200).json(historico);
    } else {
      res.status(404).json({ error: 'Historico not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controlador para deletar um histórico de usuário por ID
exports.deleteHistorico = async (req, res) => {
  try {
    const historico = await HistoricoUsuario.findByPk(req.params.id);
    if (historico) {
      await historico.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Historico not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};