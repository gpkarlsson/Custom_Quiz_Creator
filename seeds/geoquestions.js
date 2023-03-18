const { Questions } = require('../models');

const questions =
  [
    {
      question: "What continent is the country Georgia located in?",
      answers: [
        "Europe",
        "Asia",
        "North America",
        "South America"
      ],
      c_Answers: 0
    },
    {
      question: "What is the largest state by area in the US",
      answers: [
        "Minnesota",
        "Maine",
        "Alaska",
        "Texas"
    ],
      c_Answers: 2
    },
    {
      question: "What is the smallest state by area in the US?",
      answers: [
        "New Hampsire",
        "Rhode Island",
        "Vermont",
        "Colorado"
    ],
      c_Answers: 1
    },
    {
      question: "What state borders Wisconsin to the south?",
      answers: [
        "Illinois",
        "South Dakota",
        "New Mexico",
        "Washington"
      ],
      c_Answers: 1
    },
    {
      question: "What country borders the US to the North?",
      answers: [
        "Argentia",
        "Canada",
        "Mexico",
        "Sweden"
      ],
      cAnswer: 1
    }];

const seedGeoQuestions = () => Questions.bulkCreate(questions);

module.exports = seedGeoQuestions;