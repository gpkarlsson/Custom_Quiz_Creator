const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Answer extends Model { }

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isCorrect: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        question_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'question',
            key: 'id',
          },
        },
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'answer',
    });

module.exports = Answer;