console.log('Test')

let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')

let question = document.getElementById('question')

const startButton = document.getElementById('start')

startButton.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Started')
  startButton.classList.add('hide')
}

function nextQuestion() {

}

function answer() {

}