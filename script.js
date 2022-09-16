//ceil makes whole numbers
//random is a float from 0.1 to 9.9
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')

//get score from user local storage, from string to int with JSON.parse
let score = JSON.parse(localStorage.getItem('score'))

// prevent when no score in local storage
// !score means no score
if (!score){
  score = 0;
}

//update score element
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `${num1} x ${num2}`

const correctAns = num1*num2


// to convert string type to int, add + before the name value
// .value gives string back every time

formEl.addEventListener('submit',()=>{
  const userAns = +inputEl.value
  if(userAns === correctAns){
    score++
    updateLocalStorage()
  }else{
    score--
    updateLocalStorage()
  }
})

//store score variable inside the local storage off the browser
//convert type int to string -  JSON.stringify(score)

function updateLocalStorage(){
  localStorage.setItem('score', JSON.stringify(score))
}

//it needs a localStorage.clear() when reloaded


