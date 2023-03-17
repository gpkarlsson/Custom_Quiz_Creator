const User = require('./User');
const Quiz = require('./Quiz');
// const Answer = require('./Answer');

User.hasMany(Quiz, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

Quiz.belongsTo(User, {
    foreignKey: 'user_id'
  });

// Answer.belongsTo(Quiz, {
//   foreignKey: ''
// })

module.exports = { User, Quiz };
