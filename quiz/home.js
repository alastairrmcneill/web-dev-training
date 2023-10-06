const quizData = [
  {
    question: "How old is Ali?",
    a: "22",
    b: "25",
    c: "29",
    d: "33",
    correct: "c",
  },
  {
    question: "What sport does Ali play?",
    a: "Golf",
    b: "Cricket",
    c: "Snooker",
    d: "Bowls",
    correct: "a",
  },
];

let currentQuestion = 0;
let score = 0;
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const questionEl = document.getElementById("question-text");
const submitButton = document.getElementById("submit-button");
const radioInputs = document.querySelectorAll('input[type="radio"]');

function resetRadioInputs() {
  for (let i = 0; i < radioInputs.length; i++) {
    radioInputs[i].checked = false;
  }
}

function checkSelectedRadioInputs() {
  let answer = undefined;
  radioInputs.forEach((radioInput) => {
    if (radioInput.checked) {
      answer = radioInput.id;
    }
  });
  return answer;
}

function loadQuiz() {
  resetRadioInputs();
  const currentQuestionData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuestionData.question;
  a_text.innerHTML = currentQuestionData.a;
  b_text.innerHTML = currentQuestionData.b;
  c_text.innerHTML = currentQuestionData.c;
  d_text.innerHTML = currentQuestionData.d;
}

submitButton.addEventListener("click", () => {
  //  Check if radio button is selected
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  let isAnySelected = false;

  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      isAnySelected = true;
      break;
    }
  }

  if (!isAnySelected) {
    return;
  }

  // Check answer
  let answer = checkSelectedRadioInputs();

  if (answer === quizData[currentQuestion].correct) {
    score++;
  }

  // Increment the question
  currentQuestion++;

  // Check if past the last question
  if (currentQuestion >= quizData.length) {
    alert(`You have finished the quiz! You got ${score} correct!`);
  } else {
    loadQuiz();
  }
});

loadQuiz();
