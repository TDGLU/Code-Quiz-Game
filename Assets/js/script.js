// Console test 

console.log('Test')

// Grabbing elements from HTML

const questionBox = document.getElementById('question')

const answerBox = document.getElementById('choice-box')

const answerList = document.getElementById('choice-list')

const startButton = document.getElementById('start')

const choices = document.getElementById('c')

let randomized, currentQuestion

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
  randomized = question.sort(() => Math.random() - .5)
  currentQuestion = 0
  questionBox.classList.remove('hide')
  answerBox.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  resetState()
  showQuestion(randomized[currentQuestion])
}

function showQuestion(question) {
  questionBox.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('c')
    button.innerText = answer.text
    button.classList.add('c')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseAnswer)
    answerBox.appendChild(button)
  })
}

function resetState() {
    choices.classList.add("hide")
    while (answerBox.firstChild) {
      answerBox.removeChild
      (answerBox.firstChild)
    }
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
      { text: 'Javascript', correct: true}
    ]
  },
  {
    question: 'Arrays in Javascript can be stored in ___.',
    answers: [
      { text: 'Numbers and Strings', correct: false},
      { text: 'Other Arrays', correct: false},
      { text: 'Booleans', correct: false},
      { text: 'All of the above', correct: true}
    ]
  }
]