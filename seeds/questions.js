const { Questions } = require('../models');

//TODO: Add questions, figure out what other parameters are needed/how to implement. Do questions and answers need to be combined into one?
const questionData = [
  {
    name: 'Geography Quiz',
    questions: [
      {
        category: 'geography',
        question: 'What continent is the country Georgia located in?',
        answer: 'Europe'
      },
      {
        category: 'geography',
        question: 'What is the largest state by area in the US',
        answer: 'Alaska'
      },
      {
        category: 'geography',
        question: 'What is the smallest state by area in the US?',
        answer: 'Rhode Island'
      },
      {
        category: 'geography',
        question: 'What state borders Wisconsin to the south?',
        answer: 'Rhode Island'
      },
      'What is the largest state by area in the US?',
      {
        category: 'geography',
        question: 'What country borders the US to the North?',
        answer: 'Canada'
      }
    ],
    // answers: [
    //   'Europe',
    //   'Alaska',
    //   'Rhode Island',
    //   'Illinois',
    //   'Canada'
    // ]
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
    // answers: [
    //   '4',
    //   '2',
    //   'x = 3',
    //   '3000',
    //   '3.14',
    //   'One and themselves',
    //   '180 degrees'
    // ]
  },
  // {
  //   name: 'JavaScript Quiz',
  //   questions: [
  //     'What does DOM stand for?',
  //     'What does NPM stand for?',
  //     ''
  //   ]
  // }
]