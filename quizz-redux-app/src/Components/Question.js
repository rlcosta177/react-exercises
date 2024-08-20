import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const decodeHTML = function (html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function Question() {
  const [questions, setQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [options, setOptions] = useState([])

  // score == current global state score
  // same applies to encodedQuestions
  const score = useSelector((state) => state.score)
  const encodedQuestions = useSelector((state) => state.questions)

  // on window loaded
  useEffect(() => {
    // decode from json to human readable text
    const decodedQuestions = encodedQuestions.map(q => {
      return {
        ...q,
        question: decodeHTML(q.question),
        correct_answer: decodeHTML(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(a => decodeHTML(a))
      }
    })

    setQuestions(decodedQuestions)
  }, [encodedQuestions])

  // retrieve the global state index into this const
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  // create a const to store the question index that was set into questions(a useState variable)
  const question = questions[questionIndex]
  const answer = question && question.correct_answer

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  // sets a random correct answer in between the incorrect ones randomly
  // this is done whenever the page is loaded(in this case, after the timeout expires and we go to the next question)
  useEffect(() => {
    if (!question) {
      return;
    }
    // shallow copy of the question array, containing the incorrect answers
    let answers = [...question.incorrect_answers]
    // add one correct question to the incorrect answers array
    answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)

    // sets the opstions that will be given to the player.
    // this is displayed in the return statement at the end of the code
    setOptions(answers)
  }, [question])

  // when an option is selected, pass the value of the answer through parameter
  // set answerSelected as true
  // retreive the text from the selected answer which will be used to
  // check if it correct or not
  // if correct -> score + 1
  // if incorrect -> just wait for the timer to run out and pass onto the next question
  const handleListItemClick = (event) => {
    setAnswerSelected(true)
    setSelectedAnswer(event.target.textContent)

    if (event.target.textContent === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })
    }

    // whether or not the option is correct, a timer is set to pass to the next question
    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {
        setAnswerSelected(false)
        setSelectedAnswer(null)

        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,
        })
      }, 1000)
    }
  }

  // whenever an option is clicked, we check if the used
  // selected the correct/incorrect answer, and if they
  // even selected an answer
  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }

    if (option === answer) {
      return `correct`
    }

    if (option === selectedAnswer) {
      return `selected`
    }
  }

  if (!question) {
    return <div>Loading</div>
  }

  return (
    <div>
      <p>Question {questionIndex + 1}</p>
      <h3>{question.question}</h3>
      <ul>
        {options.map((option, i) => (
          <li key={i} onClick={handleListItemClick} className={getClass(option)}>
            {option}
          </li>
        ))}
      </ul>
      <div>
        Score: {score} / {questions.length}
      </div>
    </div>
  )
}
export default Question