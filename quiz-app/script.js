const arrayEl = [
  {
    question: "Which is larget animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

const thequestion = document.querySelector(".question-css");
const answerEl = document.querySelector(".ans");
const buttonsEl = document.querySelector(".buttons");
const nextEl = document.querySelector(".next");

let currentQuestionIndex = 0;
let marks = 0;

function showQuestion() {
  let currentQuestion = arrayEl[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  thequestion.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((e) => {
    const button = document.createElement("button");
    button.innerHTML = e.text;
    button.classList.add("ans");
    buttonsEl.appendChild(button);

    button.addEventListener("click", () => {
      if (e.correct) {
        button.classList = "correct";
        marks++;
      } else {
        button.classList = "not-correct";
        marks = marks + 0;
      }

      Array.from(buttonsEl.children).forEach((child) => {
        if (child.correct === "true") {
          child.classList = "correct";
        }
        child.disabled = true;
      });
      nextEl.style.display = "block";
    });
  });
  console.log("marks " + marks);
}

nextEl.addEventListener("click", NextButton);

function NextButton() {
  buttonsEl.innerHTML = "";
  if (currentQuestionIndex < 3) {
    currentQuestionIndex++;
    showQuestion();
  } else if (currentQuestionIndex === 3) {
    thequestion.innerHTML = " you have reached the end of the quiz";
    nextEl.innerHTML = "restart";
    thequestion.innerHTML = `your score is ${marks}`;
    currentQuestionIndex++;
  } else if (currentQuestionIndex > 3) {
    location.reload();
  }
}

showQuestion();
