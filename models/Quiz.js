const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quiz extends Model {}

Quiz.init({
    category: DataTypes.STRING,
    questionCount: DataTypes.INTEGER,
}, {sequelize, modelName: 'quiz'})


module.exports = Quiz