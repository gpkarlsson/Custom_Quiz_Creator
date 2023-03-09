const sequelize = require('../config/connection.js');
const seedAnswer = require('./answers');
const seedQuestion = require('./questions');

//Seed Answers and Questions
const seedAll = async () => {
  await sequelize.sync({ force: true })
  
  await seedAnswer();
  
  await seedQuestion();
  
  process.exit(0);
};

seedAll();
