// models/User.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

class atividade extends Model {}

atividade.init({
  atividade_id: {
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
  tipo_atividade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duracao: {
    type: DataTypes.TIME,
    allowNull: false
  },
  data_hora: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  km: {
    type: DataTypes.FLOAT,
    allowNull: true  
  },
  bpm: {
    type: DataTypes.INTEGER,
    allowNull: true  
  },
  relogio: {
    type: DataTypes.STRING,
    allowNull: true  
  },
}, {
  sequelize,
  modelName: 'atividade'
});

User.sync();

module.exports = atividade