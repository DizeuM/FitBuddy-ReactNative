const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class exercicio extends Model {}

exercicio.init({
  exercicio_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  video_URL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  grupo_muscular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'exercicio'
});

exercicio.sync();

module.exports = exercicio;