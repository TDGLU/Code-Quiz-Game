console.log('Test')

const questionBox = document.getElementById('question')

const answerBox = document.getElementById('answer')

const startButton = document.getElementById('start')

// const randomized, currentQuestion

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
  // randomized = question.sort(() => Math.random() - .5)
  // currentQuestion = 0
  questionBox.classList.remove('hide')
  answerBox.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  showQuestion(randomized[currentQuestion])
}

function showQuestion(question) {
  question
}

function chooseAnswer() {

}

const question = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      { text: 'Numbers', correct: false},
      { text: 'Strings', correct: false},
      { text: 'Booleans', correct: false},
      { text: 'Javascript', correct: true},
    ]
  }
]