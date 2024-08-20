import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// the props here is used to display button text, not to receive state changes
function FetchButton(props) {
  // questionCategory == selected question_category | THIS IS DONE IN Settings.js
  const questionCategory = useSelector(
    (state) => state.options.question_category
  )
  // questionDifficulty == selected question dificulty | THIS IS DONE IN Settings.js
  const questionDifficulty = useSelector(
    (state) => state.options.question_difficulty
  )
  const questionType = useSelector((state) => state.options.question_type)
  const questionAmount = useSelector(
    (state) => state.options.amount_of_questions
  )
  const questionIndex = useSelector((state) => state.index)

  const dispatch = useDispatch()

  // Actions + Dispatch at the same time.
  // saves a lot of time
  // whenever 'setLoading' is called, dispatch the action with the recieved value
  // changing it in the process
  const setLoading = (value) => {
    dispatch({
      type: 'CHANGE_LOADING',
      loading: value,
    })
  }

  // receives random questions given by the api 
  const setQuestions = (value) => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value,
    })
  }

  // 
  const handleQuery = async () => {
    // set the number of questions you want to receive
    let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`

    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`)
    }

    if (questionDifficulty.length) {
      apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`)
    }

    if (questionType.length) {
      apiUrl = apiUrl.concat(`&type=${questionType}`)
    }

    // display is loading by default, and only change it to false whenever 
    // the api is loaded
    setLoading(true)

    // set loading to false once the api is loaded as stated above
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        // once the api is loaded, retreive the questions from the api
        setQuestions(response.results)
        setLoading(false)
      })

    // set index and score whenever FetchButton.js is clicked
    // FetchButton is called in FinalScreen.js
    if (questionIndex > 0) {
      dispatch({
        type: 'SET_INDEX',
        index: 0,
      })

      dispatch({
        type: 'SET_SCORE',
        score: 0,
      })
    }
  }

  // props.text é usado para dar display do texto do butão dinamicamente
  return <button onClick={handleQuery}>{props.text}</button>
}
export default FetchButton