import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FetchButton from './FetchButton'

function Settings() {
  const [options, setOptions] = useState(null)

  const loading = useSelector((state) => state.options.loading)

  const questionCategory = useSelector(
    (state) => state.options.question_category
  )
  // set questionDifficulty to the chosen difficulty in the html below
  const questionDifficulty = useSelector((state) => state.options.question_difficulty)
  
  // 
  const questionType = useSelector((state) => state.options.question_type)

  const questionAmount = useSelector((state) => state.options.amount_of_questions)

  const dispatch = useDispatch()

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`

    
    const handleLoadingChange = (value) => {
      dispatch({
        type: 'CHANGE_LOADING',
        loading: value,
      })
    }

    // loading is displayed by default
    handleLoadingChange(true)

    // only when the api is loaded, does the loading screen disappear
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false)
        setOptions(response.trivia_categories)
      })
  }, [setOptions, dispatch])

  const handleCategoryChange = (event) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      question_category: event.target.value,
    })
  }

  // when the difficulty is chosen, the const 'questionDifficulty'
  // is changed to the difficulty value(ex: difficulty-1)
  // and then this function is triggered(ex: event == difficulty-1)
  // the action CHANGE_DIFFICULTY is dispatched with the value
  // event.target.value which is difficulty-1
  const handleDifficultyChange = (event) => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      question_difficulty: event.target.value,
    })
  }

  // when the type of question is changed, the const 'questionType'
  // is changed to the question type chosen and then this function is triggered
  // dispatching the CHANGE_TYPE action with the value event.target.value
  // which is the type of question chosen by the used
  const handleTypeChange = (event) => {
    dispatch({
      type: 'CHANGE_TYPE',
      question_type: event.target.value,
    })
  }

  // same as the above
  // 1. create const that takes in a piece of state
  // 2. create a button and send the value of the const to the function "handleAmountChange"
  //   (the value would be a the html key OR value from the options of the dropbox in this example. IDK which of them is taken)
  // 3. the function takes in the parameter and calls the action "CHANGE_AMOUNT"
  // 4. then the we change the value of the field chosen in the action to the value
  //    of the event we receive by parameter
  const handleAmountChange = (event) => {
    dispatch({
      type: 'CHANGE_AMOUNT',
      amount_of_questions: event.target.value,
    })
  }

  if (!loading) {
    return (
      <div>
        <h1>Quiz App</h1>
        <div>
          <h2>Select Category:</h2>
          <select value={questionCategory} onChange={handleCategoryChange}>
            <option>All</option>
            {options &&
              options.length &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <h2>Select Difficulty:</h2>
          <select value={questionDifficulty} onChange={handleDifficultyChange}>
            <option value="" key="difficulty-0">
              All
            </option>
            <option value="easy" key="difficulty-1">
              Easy
            </option>
            <option value="medium" key="difficulty-2">
              Medium
            </option>
            <option value="hard" key="difficulty-3">
              Hard
            </option>
          </select>
        </div>

        <div>
          <h2>Select Question Type:</h2>
          <select value={questionType} onChange={handleTypeChange}>
            <option value="" key="type-0">
              All
            </option>
            <option value="multiple" key="type-1">
              Multiple Choice
            </option>
            <option value="boolean" key="type-2">
              True/False
            </option>
          </select>
        </div>

        <div>
          <h2>Amount of Questions:</h2>
          <input value={questionAmount} onChange={handleAmountChange} />
        </div>

        <FetchButton text="Get started!" />
      </div>
    )
  }

  return <p>LOADING...</p>
}
export default Settings