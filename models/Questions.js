const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

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
    quiz_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'quiz',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: false,
    underscored: true,
    modelName: 'questions',
    timestamps: true,
  }
);

module.exports = Questions;