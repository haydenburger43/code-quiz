const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector("#Timer")
let time = 75;
const questions = [{question: 'What is today?', answer: 'thursday'},{}]

startBtn.addEventListener("click", function() {
//add timer
    
    setInterval(function(){
        time--
        timer.textContent = time;
    }, 1000)

})

function nextQuestion() {}