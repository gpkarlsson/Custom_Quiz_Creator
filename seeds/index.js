const sequelize = require('../config/connection');
const seedGeoQuestions = require('./geoquestions');

//const seedFiller = require('./answers');

//Seed Answers and Questions
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGeoQuestions();

  //await seedFiller();

  process.exit(0);
};

seedAll();
