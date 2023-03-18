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
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      answers:{
      type: DataTypes.stringify,
      allowNull: false,
    },
    cAnswers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quiz',
        key: 'id',
      },
    },},
    
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quiz',
  });

module.exports = Quiz;