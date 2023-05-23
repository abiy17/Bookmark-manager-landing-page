import { useState } from "react";
import "./app.css"
function App() {
  const questions = [
    {
      question: "what is the capital of France",
      answerOptions: [
        { answer: "New york" , iscorrect: false},
        { answer: "london" , iscorrect: false},
        { answer: "paris" , iscorrect: true},
        { answer: "Dublin" , iscorrect: false},
      ]
    },
    {
      question: "Who is ceo of tesla",
      answerOptions: [
        { answer: "jeff Bezos" , iscorrect: false},
        { answer: "Elon musk" , iscorrect: true},
        { answer: "Bill Gates" , iscorrect: false},
        { answer: "Tony Stark" , iscorrect: false},
      ]
    },
    {
      question: "The iphone was Created By which company?",
      answerOptions: [
        { answer: "Apple" , iscorrect: true},
        { answer: "Intel" , iscorrect: false},
        { answer: "Amazon" , iscorrect: false},
        { answer: "Microsoft" , iscorrect: false},
      ]
    },
    {
      question: "How many harry poter books are there?",
      answerOptions: [
        { answer: "1" , iscorrect: false},
        { answer: "4" , iscorrect: false},
        { answer: "6" , iscorrect: false},
        { answer: "7" , iscorrect: true},
      ]
    }
  ]
  const[currentQuestion,setcurrentQuestion] = useState(0)
  const[showscore,setshowscore] = useState(false)
  const [score,setscore] = useState(0)
  const HandleClick =(iscorrect)=>{
    if(iscorrect === true){
        setscore(score+1)
    }
    let nextQuestion = currentQuestion + 1
    if(questions.length > nextQuestion){
      setcurrentQuestion(nextQuestion)
    }
    else{
      alert("you have reached the end of the quiz!!")
      setshowscore(true)
    }
  }
  return ( 
    <div className="app">
        {showscore  ?
          <div className="score">
                <h2 className="h2">your scored {score} out of 4</h2>
          </div>:
          <div className="quiz">
            <div className="question-section">
              <h2>question {currentQuestion+1}/4</h2>
              <h2 className="h2">{questions[currentQuestion].question}</h2>
            </div>
            <div className="btns">
            {questions[currentQuestion].answerOptions.map((item)=>{
              return(
                <div className="div-btn">
                  <button onClick={()=>HandleClick(item.iscorrect)}>{item.answer}</button>
                </div>
          );
        })}
            </div>

      </div>}
    </div>
   );
}

export default App;