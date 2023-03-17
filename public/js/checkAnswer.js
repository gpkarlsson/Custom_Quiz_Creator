//less time for wrong answers
function checkAnswer(eventObject) {
  let optionButton = eventObject.target;
  resultDiv.style.display = "block";
  if (optionIsCorrect(optionButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      //if time is less than 10, display time as 0 and end quiz?
      time = 0;
      displayTime();
      endQuiz();
    }
  }
  currentQuestion++;
//if we have not run out of questions then display next question, else end quiz
if (currentQuestion < questions.length) {
  displayQuestion();
} else {
  endQuiz();
}}

module.exports = checkAnswer;