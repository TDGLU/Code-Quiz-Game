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
  console.log('Quiz Started')
  startButton.classList.add('hide')
  randomized = question.sort(() => Math.random() - .5)
  currentQuestion = 0
  questionBox.classList.remove('hide')
  answerBox.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  reset()
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

function reset() {
  choices.classList.add("hide")
  while (answerBox.firstChild) {
    answerBox.removeChild
    (answerBox.firstChild)
  }
}

function chooseAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  status(document.body, correct)
  Array.from(answerList.children).forEach(button => {
    status(button, button.dataset)
  })
  if (randomized.length > currentQuestion + 1){
    nextQuestion.classList.remove('hide')
  }
}

function status(element, correct) {
  clearStatus(element)
  if (correct) {
    element.classList.add('right')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatus(element) {
  element.classList.remove('right')
  element.classList.remove('wrong')
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