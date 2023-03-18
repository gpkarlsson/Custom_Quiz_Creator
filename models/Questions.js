const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

//

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
      answers:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    c_Answers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: false,
    underscored: true,
    modelName: 'questions',
  });

module.exports = Questions;