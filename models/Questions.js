const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model { }

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
    answers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    c_Answers: {
      type: DataTypes.INTEGER,
      defaultValue: [],
    },
  },
  {
    sequelize,
    freezeTableName: false,
    underscored: true,
    modelName: 'questions',
  });

module.exports = Questions;