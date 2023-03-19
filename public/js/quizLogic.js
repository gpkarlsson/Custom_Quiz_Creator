const { Questions, Quiz } = require('./models');
const questionS = document.querySelector('#question');
const answerS = document.querySelector('#answers');
const submitBtn = document.querySelector('#answerbox');
let currentQuestionId = 0;
let score = 0;

async function startQuiz() {
    // Retrieve the quiz data from the server
    const quiz = await Quiz.findOne();
    const questions = await Questions.find({ quizId: quiz._id });

    // Compile the Handlebars templates
    const questionTemplate = Handlebars.compile('{{question}}');
    const answerTemplate = Handlebars.compile('{{answers}}');

    // Disimage.pngplay the first question
    displayQuestion(questions[currentQuestionId]);

    function displayQuestion(question) {
        // Render the question text using the Handlebars template
        questionS.innerHTML = questionTemplate({ question: question.text });

        // Render the answer buttons using the Handlebars template
        answerS.innerHTML = question.answers.map(answer => answerTemplate({ answer })).join('');

        // Add event listeners to the answer buttons
        const answerButtons = answerS.querySelectorAll('#answerbox');
        answerButtons.forEach(button => {
            button.addEventListener('click', () => {
                const cAnswer = question.answers.find(answer => answer.isCorrect);
                if (button.textContent === cAnswer.text) {
                    score++;
                }
                currentQuestionId++;
                if (currentQuestionId < questions.length) {
                    displayQuestion(questions[currentQuestionId]);
                } else {
                    endQuiz();
                }
            });
        });
    }

    function endQuiz() {
        // Display the final score
        questionS.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
        answerS.innerHTML = '';
        submitBtn.disabled = true;
    }
}

startQuiz();