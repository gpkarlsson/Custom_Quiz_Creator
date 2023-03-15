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
      },
    ],
  },
  {
    name: 'History Quiz',
    questions: [
      {
        category: 'history',
        question: 'What year did the American Revolutionary war begin?',
        answers: [
          { text: '1776', correct: true},
          { text: '1775', correct: false},
          { text: '1867', correct: false},
          { text: '1941', correct: false}
        ]
      },
      {
        category: 'history',
        question: 'Who invented the lightbulb?',
        answers: [
          { text: 'George Washington', correct: false},
          { text: 'Benjamin Franklin', correct: false},
          { text: 'Albert Einstein', correct: false},
          { text: 'Thomas Edison', correct: true}
        ]
      },
      {
        category: 'history',
        question: 'Who discovered the Americas?',
        answers: [
          { text: 'Christopher Columbus', correct: true},
          { text: 'Abraham Lincoln', correct: false},
          { text: 'John Cabot', correct: false},
          { text: 'Sir Francis Drake', correct: false}
        ]
      },
      {
        category: 'history',
        question: 'What year did World War 2 end?',
        answers: [
          { text: '1914', correct: false},
          { text: '1972', correct: false},
          { text: '1945', correct: true},
          { text: '1949', correct: false}
        ]
      },
      {
        category: 'history',
        question: 'What was the last state to join the union in 1959?',
        answers: [
          { text: 'Hawaii', correct: true},
          { text: 'Alaska', correct: false},
          { text: 'Washington', correct: false},
          { text: 'Texas', correct: false}
        ]
      },
    ],
  },
  {
    name: 'Language Arts Quiz',
    questions: [
      {
        category: 'language arts',
        question: 'A word that shares the same meaning as another word is known as a',
        answer: 'synonym'
      },
      {
        category: 'language arts',
        question: 'The name of a person, place, or thing',
        answer: 'noun'
      },
      {
        category: 'language arts',
        question: 'A word used to describe a noun or pronoun',
        answer: 'adjective'
      },
      {
        category: 'language arts',
        question: 'This word is used to join words, phrases, or clauses such as "but and "or"',
        answer: 'conjunction'
      },
      {
        category: 'language arts',
        question: 'Which term indicates a pause, typically between two main clauses, that is more pronounced than that indicated by a comma.',
        answer: 'semicolon'
      },
    

    ],
  },
]
