const { Quiz } = require('../models');

const questionData = [
  {
    name: 'Geography Quiz',
    subject: 'geography',
    questions: 'What continent is the country Georgia located in?',
    options: JSON.stringify(['Europe', 'Asia', 'North America', 'South America']),
    correctAnswer: 'Europe'
  },
  {
    name: 'Science Quiz',
    subject: 'science',
    question: 'What is the smallest particle in the universe?',
    options: JSON.stringify(['Atom', 'Electron', 'Neutron', 'Quark']),
    correctAnswer: 'Quark',
  },
  {
    name: 'History Quiz',
    subject: 'history',
    question: 'What year did World War II end?',
    options: JSON.stringify(['1939', '1943', '1945', '1951']),
    correctAnswer: '1945',
  },
  {
    name: 'Literature Quiz',
    subject: 'literature',
    question: 'Who wrote the novel "To Kill a Mockingbird"?',
    options: JSON.stringify(['Harper Lee', 'John Steinbeck', 'J.D. Salinger', 'Ernest Hemingway']),
    correctAnswer: 'Harper Lee',
  }
//[
//       {
//         category: 'geography',
//         question: 'What continent is the country Georgia located in?',
//         answers: [
//           { text: 'Europe', correct: true },
//           { text: 'Asia', correct: false },
//           { text: 'North America', correct: false },
//           { text: 'South America', correct: false }
//         ]
//       },
//       {
//         category: 'geography',
//         question: 'What is the largest state by area in the US',
//         answers: [
//           { text: 'Minnesota', correct: false },
//           { text: 'Maine', correct: false },
//           { text: 'Alaska', correct: true },
//           { text: 'Texas', correct: false }
//         ]
//       },
//       {
//         category: 'geography',
//         question: 'What is the smallest state by area in the US?',
//         answer: [
//           { text: 'New Hampshire', correct: false },
//           { text: 'Rhode Island', correct: false },
//           { text: 'Vermont', correct: false },
//           { text: 'Colorado', correct: false },

//         ]
//       },
//       {
//         category: 'geography',
//         question: 'What state borders Wisconsin to the south?',
//         answers: [
//           { text: 'Illinois', correct: true },
//           { text: 'South Dakota', correct: false },
//           { text: 'New Mexico', correct: false },
//           { text: 'Washington', correct: false },
//         ]
//       },
//       {
//         category: 'geography',
//         question: 'What country borders the US to the North?',
//         answers: [
//           { text: 'Argentina', correct: false },
//           { text: 'Canada', correct: true },
//           { text: 'Mexico', correct: false },
//           { text: 'Sweden', correct: false }
//         ]
//       }
// ]
  //}
  // {
  //   name: 'Math Quiz',
  //   subject: 'math',
  //   questions: [
  //     {
  //       category: 'math',
  //       question: 'What is 2+2',
  //       answers: [
  //         {text: '3', correct: false},
  //         {text: '4', correct: true},
  //         {text: '900', correct: false},
  //         {text: '362', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'math',
  //       question: 'What is the square root of 4',
  //       answers: [
  //         {text: '9001', correct: false},
  //         {text: '2', correct: true},
  //         {text: '42', correct: false},
  //         {text: '1337', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'math',
  //       question: 'If 3x = 9, solve for x',
  //       answers: [
  //         {text: 'x = 1', correct: false },
  //         {text: 'x = 1223', correct: false },
  //         {text: 'x = 15', correct: false },
  //         {text: 'x = 3', correct: true }
  //       ]
  //     },
  //     {
  //       category: 'math',
  //       question: 'How many degrees must all angles in a triangle add up to?',
  //       answers: [
  //         {text: '180 degrees', correct: true},
  //         {text: '4 degrees', correct: false},
  //         {text: '900 degrees', correct: false},
  //         {text: '1000 degrees', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'math',
  //       question: 'What is 9000 divided by 3?',
  //       answers: [
  //         {text: '40', correct: false},
  //         {text: '1972', correct: false},
  //         {text: '3000', correct: true},
  //         {text: '10', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'math',
  //       question: 'What are prime numbers divisible by?',
  //       answer: '1 and themselves'
  //     },
  //   ],
  // },
  // {
  //   name: 'History Quiz',
  //   subject: 'history',
  //   questions: [
  //     {
  //       category: 'history',
  //       question: 'What year did the American Revolutionary war begin?',
  //       answers: [
  //         { text: '1776', correct: true},
  //         { text: '1775', correct: false},
  //         { text: '1867', correct: false},
  //         { text: '1941', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'history',
  //       question: 'Who invented the lightbulb?',
  //       answers: [
  //         { text: 'George Washington', correct: false},
  //         { text: 'Benjamin Franklin', correct: false},
  //         { text: 'Albert Einstein', correct: false},
  //         { text: 'Thomas Edison', correct: true}
  //       ]
  //     },
  //     {
  //       category: 'history',
  //       question: 'Who discovered the Americas?',
  //       answers: [
  //         { text: 'Christopher Columbus', correct: true},
  //         { text: 'Abraham Lincoln', correct: false},
  //         { text: 'John Cabot', correct: false},
  //         { text: 'Sir Francis Drake', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'history',
  //       question: 'What year did World War 2 end?',
  //       answers: [
  //         { text: '1914', correct: false},
  //         { text: '1972', correct: false},
  //         { text: '1945', correct: true},
  //         { text: '1949', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'history',
  //       question: 'What was the last state to join the union in 1959?',
  //       answers: [
  //         { text: 'Hawaii', correct: true},
  //         { text: 'Alaska', correct: false},
  //         { text: 'Washington', correct: false},
  //         { text: 'Texas', correct: false}
  //       ]
  //     },
  //   ],
  // },
  // {
  //   name: 'Language Arts Quiz',
  //   subject: 'language_arts',
  //   questions: [
  //     {
  //       category: 'language arts',
  //       question: 'A word that shares the same meaning as another word is known as a',
  //       answers: [
  //         { text: 'synonym', correct: true},
  //         { text: 'verb', correct: false},
  //         { text: 'noun', correct: false},
  //         { text: 'article', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'language arts',
  //       question: 'The name of a person, place, or thing',
  //       answers: [
  //         { text: 'noun', correct: true},
  //         { text: 'verb', correct: false},
  //         { text: 'definite article', correct: false},
  //         { text: 'indefinite article', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'language arts',
  //       question: 'A word used to describe a noun or pronoun',
  //       answers: [
  //         { text: 'person', correct: false},
  //         { text: 'adjective', correct: true},
  //         { text: 'adverb', correct: false},
  //         { text: 'pronoun', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'language arts',
  //       question: 'This word is used to join words, phrases, or clauses such as "but and "or"',
  //       answers: [
  //         { text: 'conjunction', correct: true},
  //         { text: 'noun', correct: false},
  //         { text: 'pronoun', correct: false},
  //         { text: 'verb', correct: false}
  //       ]
  //     },
  //     {
  //       category: 'language arts',
  //       question: 'Which term indicates a pause, typically between two main clauses, that is more pronounced than that indicated by a comma.',
  //       answers: [
  //         { text: 'colon,', correct: false},
  //         { text: 'semicolon', correct: true},
  //         { text: 'past participle', correct: false},
  //         { text: 'adjective', correct: false}
  //       ]
  //     },
  //   ],
  // },
];

const seedQuestion = () => Quiz.bulkCreate(questionData);

module.exports = seedQuestion; 