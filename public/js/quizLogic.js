const {Questions, Quiz } = require('./models');
const 


const questionS = document.querySelector('#question');
const answerS = document.querySelector('#answers');
const sumbitBtn = document.querySelector('#submit');
let currentquestionid = 0;
let score = 0;

function startQuiz() {
    for (let i = 0; i < questions.length, i++) {
        const question = questions[i];
    }
    function questionLoad() {
        currentquestionid.answerS.forEach(answer => {
            const btn = doument.addEventListener('click', userAnswer);
            btn.textContent = answer;
        })
    }
}

// Need logic here to connect button to correct answer (cAnswer) and score.