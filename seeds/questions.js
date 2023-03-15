const { Questions } = require('../models');

//TODO: Add questions, figure out what other parameters are needed/how to implement. Do questions and answers need to be combined into one?
const questionData = [
  {
    name: 'Geography Quiz',
    questions: [
      {
        category: 'geography',
        question: 'What continent is the country Georgia located in?',
        answers: [
          { text: 'Europe', correct: true },
          { text: 'Asia', correct: false },
          { text: 'North America', correct: false },
          { text: 'South America', correct: false }
        ]
      },
      {
        category: 'geography',
        question: 'What is the largest state by area in the US',
        answers: [
          { text: 'Minnesota', correct: false },
          { text: 'Maine', correct: false },
          { text: 'Alaska', correct: true },
          { text: 'Texas', correct: false }
        ]
      },
      {
        category: 'geography',
        question: 'What is the smallest state by area in the US?',
        answer: [
          { text: 'New Hampshire', correct: false },
          { text: 'Rhode Island', correct: false },
          { text: 'Vermont', correct: false },
          { text: 'Colorado', correct: false },
        ]
      },
      {
        category: 'geography',
        question: 'What state borders Wisconsin to the south?',
        answers: [
          { text: 'Illinois', correct: true },
          { text: 'South Dakota', correct: false },
          { text: 'New Mexico', correct: false },
          { text: 'Washington', correct: false },
        ]
      },
      {
        category: 'geography',
        question: 'What country borders the US to the North?',
        answers: [
          { text: 'Argentina', correct: false },
          { text: 'Canada', correct: true },
          { text: 'Mexico', correct: false },
          { text: 'Sweden', correct: false }
        ]
      }
    ],
  },
  {
    name: 'Math Quiz',
    questions: [
      {
        category: 'math',
        question: 'What is 2+2',
        answers: [
          {text: '3', correct: false},
          {text: '4', correct: true},
          {text: '900', correct: false},
          {text: '362', correct: false}
        ]
      },
      {
        category: 'math',
        question: 'What is the square root of 4',
        answers: [
          {text: '9001', correct: false},
          {text: '2', correct: true},
          {text: '42', correct: false},
          {text: '1337', correct: false}
        ]
      },
      {
        category: 'math',
        question: 'If 3x = 9, solve for x',
        answers: [
          {text: 'x = 1', correct: false },
          {text: 'x = 1223', correct: false },
          {text: 'x = 15', correct: false },
          {text: 'x = 3', correct: true }
        ]
      },
      {
        category: 'math',
        question: 'How many degrees must all angles in a triangle add up to?',
        answers: [
          {text: '180 degrees', correct: true},
          {text: '4 degrees', correct: false},
          {text: '900 degrees', correct: false},
          {text: '1000 degrees', correct: false}
        ]
      },
      {
        category: 'math',
        question: 'What is 9000 divided by 3?',
        answers: [
          {text: '40', correct: false},
          {text: '1972', correct: false},
          {text: '3000', correct: true},
          {text: '10', correct: false}
        ]
      },
      {
        category: 'math',
        question: 'What are prime numbers divisible by?',
        answers: [
          {text: '2, 4, 6, and 8', correct: false},
          {text: '1 and themselves', correct: true},
          {text: '0', correct: false},
          {text: '1000', correct: false}
        ]
      }
    ],
  },
]