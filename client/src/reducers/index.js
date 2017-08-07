import { combineReducers } from 'redux'

import {
  ADD_UNCONFIRMED_QUESTION,
  CONFIRM_PERSISTED_QUESTION,
  GET_QUIZ_ID,
  RECEIVE_QUIZ_ID
} from '../actions'

function questions(state = [], action) {
  switch(action.type) {
    case ADD_UNCONFIRMED_QUESTION:
      return [
        ...state,
        {
          text: action.text,
          answers: [],
          loading: true
        }
      ]

    case CONFIRM_PERSISTED_QUESTION:
      let new_state = state.slice()

      let q = new_state.find(question => question.text === action.text)
      q.loading = false
      return new_state


    default:
      return state
  }
}

function quiz(state = {id: ""}, action) {
  switch(action.type) {
    case GET_QUIZ_ID:
      return state
    case RECEIVE_QUIZ_ID:
      return Object.assign({}, state, {id: action.id})
    default:
      return state
  }
}

const quizApp = combineReducers({
  questions,
  quiz
})

export default quizApp

