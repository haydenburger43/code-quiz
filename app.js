const startBtn = document.querySelector('#startBtn')
const timer = document.querySelector("#Timer")
const quiz= document.getElementById('quiz')
const questions= document.getElementById('questions')
const answerA = document.getElementById('answer.a')
const answerB = document.getElementById('answer.b')
const answerC = document.getElementById('answer.c')
const answerD = document.getElementById('answer.d')

let time = 75;
const questionsArr = [
    {
       question: "what does js stand for",
       options: ["Javascript", "java", "juicy fruit", "all of the above"],
       answer: "Javascript",
       id: 1
    },

    {
        question: "what does cs stand for",
        options: ["Javascript", "computer science", "coffee supreme", "all of the above"],
        answer: "computer science",
        id: 2
     },

     {
        question: "what is css used for",
        options: ["designing the webpage", "I dont know", "juicy fruit", "all of the above"],
        answer: "designing the webpage",
        id: 3
     },

     {
        question: "what do you use for an array",
        options: ["{}", "[]", "''", "all of the above"],
        answer: "[]",
        id:4
     },

     {
        question: "where do you remotley store data",
        options: ["Javascript", "github", "juicy fruit", "all of the above"],
        answer: "github",
        id: 5
     },


   ];

startBtn.addEventListener("click", function() {
//add timer
    
    setInterval(function(){
        time--
        timer.textContent = time;
    }, 1000)

})

function nextQuestion() {}

function selectAnswer() {}

function submitAnswer() {}