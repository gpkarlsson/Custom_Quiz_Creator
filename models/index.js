const User = require('./User');
const Questions = require('./Questions');
const Quiz = require('./Quiz');
const Answer = require('./Answer');

// Define a User as having many Quizzes, thus creating a foreign key in the `quiz` table
User.hasMany(Quiz, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// The association can also be created from the quiz side
Quiz.belongsTo(User, {
    foreignKey: 'user_id',
});

// one quiz many questions
Quiz.hasMany(Questions, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE',
});
Questions.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
});

// one questions many answer
Questions.hasMany(Answer, {
    foreignKey: 'questions_id',
    onDelete: 'CASCADE',
});
Answer.belongsTo(Questions, {
    foreignKey: 'questions_id',
});

module.exports = { User, Questions, Quiz };
