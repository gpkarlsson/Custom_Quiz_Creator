// const fs = require('fs');
// const currentQuestion = document.getElementById
// const readAndAppend = (content, file) => {

//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const parsedData = JSON.parse(data);
//             parsedData.push(content);
//             writeToFile(file, parsedData);
//           }
//         });
//       };

// const checkAnswers =
// function checkAnswer(eventObject) {
//     let optionButton = eventObject.target;
//     resultDiv.style.display = "block";
//     if (optionIsCorrect(optionButton)) {
//       resultText.textContent = "Correct!";
//       setTimeout(hideResultText, 1000);
//     } else {
//       resultText.textContent = "Incorrect!";
//       setTimeout(hideResultText, 1000);
//       if (time >= 10) {
//         endQuiz();
//       }
//     }
//     currentQuestion++;
//   //if we have not run out of questions then display next question, else end quiz
//   if (currentQuestion < questions.length) {
//     displayQuestion();
//   } else {
//     endQuiz();
// }}

// const display = 
// function displayQuestion() {
//     let question = questionData[currentQuestion];
//     let options = question.options;
  
//     let h2QuestionElement = document.querySelector("#question-text");
//     h2QuestionElement.textContent = question.questionText;
  
//     for (let i = 0; i < options.length; i++) {
//       let option = options[i];
//       let optionButton = document.querySelector("#option" + i);
//       optionButton.textContent = option;
//     }
// }

// module.exports = {};