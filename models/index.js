const User = require('./User');
const Quiz = require('./Quiz');
const Questions = require('./Questions')
// const Answer = require('./Answer');

User.hasMany(Quiz, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Quiz.belongsTo(User, {
    foreignKey: 'user_id'
  });

Questions.belongsTo(Quiz, {
  foreignKey: ''
})
// Answer.belongsTo(Quiz, {
//   foreignKey: ''
// })

module.exports = { User, Quiz, Questions };
