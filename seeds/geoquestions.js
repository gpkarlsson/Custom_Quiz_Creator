const { Questions } = require('../models');

const questions =
  [
    {
      id: 1,
      question: "What continent is the country Georgia located in?",
      answers: "Europe, Asia, North America, or South America?",
      correctAnswer: "Europe"
    },
    {
      id: 2,
      question: "What is the largest state by area in the US",
      answers: 
        "Minnesota, Maine, Alaska, or Texas?",
      correctAnswer: "Alaska",
    },
    {
      id: 3,
      question: "What is the smallest state by area in the US?",
      answers: "New Hampsire, Rhode Island, Vermont, or Colorado?",
      correctAnswer: "Rhode Island"
    },
    {
      id: 4,
      question: "What state borders Wisconsin to the south?",
      answers: "Illinois, South Dakota, New Mexico, or Washington?",
      correctAnswer: "Illinois"
    },
    {
      id: 5,
      question: "What country borders the US to the North?",
      answers: "Argentia, Canada, Mexio, or Sweden?",
      correctAnswer: "Canada"
    }];

const seedGeoQuestions = () => Questions.bulkCreate(questions);

module.exports = seedGeoQuestions;