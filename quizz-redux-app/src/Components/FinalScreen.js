import React from 'react'
// dispatch runs the reducer, which takes in an action ofc
import { useSelector, useDispatch } from 'react-redux'

import FetchButton from './FetchButton'

function FinalScreen() {
  // called to be able to use all global store actions bla bla bla
  const score = useSelector((state) => state.score)

  const dispatch = useDispatch()

  // on replay clicked, reset all settings, index, score and questions
  const replay = () => {
    dispatch({
      type: 'SET_INDEX',
      index: 0,
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  // reset score and questions when clicking on settings
  const settings = () => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: [],
    })

    dispatch({
      type: 'SET_SCORE',
      score: 0,
    })
  }

  // just displays the final screen
  // score and buttons
  return (
    <div>
      <h3>Final Score: {score}</h3>
      <button onClick={replay}>Try again</button>
      <FetchButton text="Fetch new questions" />
      <button onClick={settings}>Back to settings</button>
    </div>
  )
}
export default FinalScreen