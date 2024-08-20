// used to gain access to the entire global state
import { useSelector } from 'react-redux'

import Settings from './Components/Settings'
import Question from './Components/Question'
import FinalScreen from './Components/FinalScreen'

import './App.css'

function App() {
  // retrieve the questions and index from the global state
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  // used to dynamically show the component relevant to the result of the if..else
  let component

  // if the index&question.length +1 is lower or equal to questions.length
  // show the component Question(which then handles the rendering of new questions and so on)
  //
  // if there are no questions, show the settings component
  //
  // if all of them are untrue, show the final screen, where you can choose to repeat the quiz, play new quiz or go to settings
  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
    </div>
  )
}

export default App