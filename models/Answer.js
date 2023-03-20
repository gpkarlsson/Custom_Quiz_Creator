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
        rAnswer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'answer',
    });

module.exports = Answer;