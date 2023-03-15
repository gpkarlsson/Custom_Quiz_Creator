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
          { text: 'Europe', correct: true},
          { text: 'Asia', correct: false},
          { text: 'North America', correct: false},
          { text: 'South America', correct: false}
        ]
      },
      {
        category: 'geography',
        question: 'What is the largest state by area in the US',
        answers: [
          {text: 'Minnesota', correct: false},
          {text: 'Maine', correct: false},
          {text: 'Alaska', correct: true},
          {text: 'Texas', correct: false}
        ]
      },
      {
        category: 'geography',
        question: 'What is the smallest state by area in the US?',
        answer: [
          {text: 'New Hampshire', correct: false},
          {text: 'Rhode Island', correct: false},
          {text: 'Vermont', correct: false},
          {text: 'Colorado', correct: false},
        ]
      },
      {
        category: 'geography',
        question: 'What state borders Wisconsin to the south?',
        answers: [
          {text: 'Illinois', correct: true},
          {text: 'South Dakota', correct: false},
          {text: 'New Mexico', correct: false},
          {text: 'Washington', correct: false},
        ] 
      },
      {
        category: 'geography',
        question: 'What country borders the US to the North?',
        answers: [
          {text: 'Argentina', correct: false},
          {text: 'Canada', correct: true},
          {text: 'Mexico', correct: false},
          {text: 'Sweden', correct: false}
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
        answer: '4'
      },
      {
        category: 'math',
        question: 'What is the square root of 4',  
        answer: '2'
      },
      {
        category: 'math',
        question: 'If 3x = 9, solve for x',
        answer: '3'
      },
      {
        category: 'math',
        question: 'How many degrees must all angles in a triangle add up to?',
        answer: '180'
      },
      {
        category: 'math',
        question: 'What is 9000 divided by 3?',
        answer: '3000' 
      },
      {
        category: 'math',
        question: 'What are prime numbers divisible by?',
        answer: '1 and themselves'
      }
      ,
      'If 3x = 9, solve for x',
      'What is 9000 divided by 3?',
      'What are prime numbers divisible by?',
      'How many degrees must all angles in a triangle add up to?'

    ],
  },
]