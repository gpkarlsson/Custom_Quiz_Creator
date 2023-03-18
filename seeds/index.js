const sequelize = require('../config/connection');
const seedGeoQuestions = require('./geoquestions')

//Seed Answers and Questions
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGeoQuestions();

  process.exit(0);
};

seedAll();
