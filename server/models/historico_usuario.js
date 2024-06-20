// models/HistoricoUsuario.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

class HistoricoUsuario extends Model {}

HistoricoUsuario.init({
  historico_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: User,
        key: 'usuario_id'
    },
    onDelete: 'CASCADE'
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imc: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'historico_usuario'
});

HistoricoUsuario.sync();

module.exports = HistoricoUsuario;