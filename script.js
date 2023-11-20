const quizDB = [
    {
      question:"What does src in html stand for",
      a:"Source",
      b:"Soul",
      c:"Script",
      d:"None of the above",
      answer: "ans1"
    },
    {
      question:"What attributes cannot be used with &lta&gt tag",
      a:"href",
      b:"alt",
      c:"class",
      d:"id",
      answer: "ans2"
    },
    {
      question:"Which tag has the highest font- size",
      a:"a",
      b:"h3",
      c:"p",
      d:"h1",
      answer: "ans4"
    },
    {
      question:"What is the full-form of HTML",
      a:"Hyper Text Markup Language",
      b:"Hydra Text Make Language",
      c:"Hyper Text Model Language",
      d:"None of the Above",
      answer: "ans1"
    }
  ]

  const question = document.querySelector(".question") 
  const option1 = document.querySelector("#option1")
  const option2 = document.querySelector("#option2")
  const option3 = document.querySelector("#option3")
  const option4 = document.querySelector("#option4")
  const submit = document.querySelector("#submit")
  const answers = document.querySelectorAll(".answer")
  const showscore =  document.querySelector("#show-score")
  let score  = 0


let questionCount = 0
  const loadQuestion = () =>{
    
    const questionList = quizDB[questionCount]

    question.innerHTML = questionList.question

    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
  }
  loadQuestion();
 
const getChechAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem)=>{
      if (curAnsElem.checked) {
        answer = curAnsElem.id
      }
    })
    return answer

}

const deselectAll = () =>{
  answers.forEach((curAnsElem)=> curAnsElem.checked = false )
}

  submit.addEventListener("click", () =>{
    const checkedAnswer = getChechAnswer();
      console.log(checkedAnswer)
      if (checkedAnswer === quizDB[questionCount].answer) {
        score++
      }
      questionCount++
      deselectAll()
      if (questionCount<quizDB.length) {
        loadQuestion()
      }
      else{
        showscore.innerHTML =`
        <h3>Your Scored ${score} / ${quizDB.length}</h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button> 
        `
        showscore.classList.remove("scoreArea")
      }
  })