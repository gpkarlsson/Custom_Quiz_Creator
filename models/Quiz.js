const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model { }

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      references: {
        model: 'question',
        key: 'quiz_id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_created: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    questions: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quiz',
  });

module.exports = Quiz;