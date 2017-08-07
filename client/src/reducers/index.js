import { combineReducers } from 'redux'

import {
  ADD_QUESTION
} from '../actions'

function questions(state = [], action) {
  switch(action.type) {
    case ADD_QUESTION:
      return [
        ...state,
        {
          text: action.text,
          answers: []
        }
      ]
    default:
      return state
  }
}

const quizApp = combineReducers({
  questions
})

export default quizApp

