const { Questions } = require('../models');

const questionData = 
[
{
  "question": "What continent is the country Georgia located in?",
  "answers": [
    "Europe",
    "Asia",
    "North America",
    "South America"
  ],
  "cAnswer": 0
},
      {
  "question": "What is the largest state by area in the US",
  "answers": [
    "Minnesota",
    "Maine",
    "Alaska",
    "Texas"
  ],
  "cAnswer": 2
},
      {
  "question": "What is the smallest state by area in the US?",
  "answer": [
    "New Hampsire",
    "Rhode Island",
    "Vermont",
    "Colorado"
  ],
  "cAnswer": 1
},
      {
  "question": "What state borders Wisconsin to the south?",
  "answers": [
    "Illinois",
    "South Dakota",
    "New Mexico",
    "Washington"
  ],
  "cAnswer": 1
},
      {
  "question": "What country borders the US to the North?",
  "answers": [
    "Argentia",
    "Canada",
    "Mexico",
    "Sweden"
  ],
  "cAnswer": 1
}];

const seedGeoQuestions = () => Questions.bulkCreate(questionData);

module.exports = seedGeoQuestions;