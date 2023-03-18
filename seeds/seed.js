const sequelize = require('../config/connection.js');
const geoQuestions = require('./geoquestions');
const questionData = require('../models/Questions');

//Seed Answers and Questions
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await geoQuestions.bulkCreate(questionData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
