const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Sheena", correct: false},
            {text: "Kate", correct: false}
        ]
    },
    {
        question: "Who is Ygot?",
        answers:[
            {text: "Nadine", correct: false},
            {text: "Kate", correct: false},
            {text: "Nadine Kate?", correct: false},
            {text: "summer", correct: true}
        ]
    },
    {
        question: "Who is the loyal dog?",
        answers:[
            {text: "Kate", correct: false},
            {text: "Patricia", correct: false},
            {text: "Kaye", correct: false},
            {text: "Nadine", correct: true}
        ]
    },
    {
        question: "Kinsay gi bbf zone?",
        answers:[
            {text: "J", correct: true},
            {text: "o", correct: true},
            {text: "p", correct: true},
            {text: "y", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const next = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();