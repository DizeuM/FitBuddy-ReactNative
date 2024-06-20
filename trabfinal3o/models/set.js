const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const treino = require('./treino');
const exercicio = require('./exercicio')

class set extends Model {}

set.init({
  set_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  treino_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: treino,
        key: 'treino_id'
    },
    onDelete: 'CASCADE'
  },
  exercicio_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: exercicio,
        key: 'exercicio_id'
    }
  },
  repeticao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  serie: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tempo_descanco: {
    type: DataTypes.INTEGER,
    allowNull: false  
  },
  observacao: {
    type: DataTypes.STRING,
    allowNull: true  
  },
}, {
  sequelize,
  modelName: 'set'
});

set.sync();

module.exports = set