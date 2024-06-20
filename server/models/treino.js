const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const exercicio = require('./exercicio');

class treino extends Model {}

treino.init({
  treino_id: {
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
    }
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  sequelize,
  modelName: 'treino'
});

exercicio.sync();

module.exports = treino