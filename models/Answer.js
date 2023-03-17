const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Quiz = require('./Quiz');

class Answer extends Model { }

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quiz_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        correct_answer: {
            type: DataTypes.BOOLEAN,
            references: {
                model: "Quiz",
                key: "id"
            },
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'quiz',
    });

module.exports = Answer;