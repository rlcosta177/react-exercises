// call this on the reducers to start the state at 0's
const initState = {
    options: {
      loading: false,
      question_category: ``,
      question_difficulty: ``,
      question_type: ``,
      amount_of_questions: 50,
    },
    questions: [],
    index: 0,
    score: 0,
  }
  
  // state = initState para que loading seja = false
  // action vai ser o 'porp'/'parametro' que é passado
  // a partir da action(corrido pelo dispatcher)
  const Reducer = (state = initState, action) => {
    switch (action.type) {
      // if the action is 'CHANGE_LOADING' (created in FetchButton.js)
      // we retrieve a shallow copy of the state, which is equal to initState
      // retrieve a shallow copy of 'options' from the object within the sate,
      // and set loading to action.loading
      //
      // This doesn't change the original 'initState' value. Only changes the shallow copy
      // And the value provided in the action(so the action's value is changed, and not the original state)
      // the state is immutable, sort of.
      case 'CHANGE_LOADING':
        return {
          ...state,
          options: {
            ...state.options,
            loading: action.loading,
          },
        }
  
      // same as above
      case 'CHANGE_CATEGORY':
        return {
          ...state,
          options: {
            ...state.options,
            question_category: action.question_category,
          },
        }
  
      // ... ... ...
      case 'CHANGE_DIFFICULTY':
        return {
          ...state,
          options: {
            ...state.options,
            question_difficulty: action.question_difficulty,
          },
        }
  
        // ... ... ... 
      case 'CHANGE_TYPE':
        return {
          ...state,
          options: {
            ...state.options,
            question_type: action.question_type,
          },
        }
  
        // ... ... ...
      case 'CHANGE_AMOUNT':
        return {
          ...state,
          options: {
            ...state.options,
            amount_of_questions: action.amount_of_questions,
          },
        }
  
      // create a shallow copy of the current state and set the action's value(questions)
      // to the value recieved when 'SET_QUESTIONS' is called
      // the process is simpler cuz 'questions is an array and not an object like 'options'
      case 'SET_QUESTIONS':
        return {
          ...state,
          questions: action.questions,
        }
  
      // same as above
      case 'SET_INDEX':
        return {
          ...state,
          index: action.index,
        }
      
      // same as above
      case 'SET_SCORE':
        return {
          ...state,
          score: action.score,
        }
  
      default:
        return state
    }
  }
  
  export default Reducer