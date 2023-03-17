const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model { }

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    questions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,

    }
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Questions',
  });

module.exports = Questions;