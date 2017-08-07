import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';


export const ADD_UNCONFIRMED_QUESTION = 'ADD_UNCONFIRMED_QUESTION'
export const PERSIST_QUESTION = 'PERSIST_QUESTION'
export const CONFIRM_PERSISTED_QUESTION = 'CONFIRM_PERSISTED_QUESTION'
export const GET_QUIZ_ID = 'GET_QUIZ_ID'
export const RECEIVE_QUIZ_ID = 'RECEIVE_QUIZ_ID'

export function addQuestion(text) {
  return (dispatch, getState) => {
    dispatch(addUnconfirmedQuestion(text))

    const { quiz } = getState()

    axios.post(`/api/quiz/${quiz.id}/add-question`, {question: {question: text, answers: []}})
    .then( response => {
      dispatch(confirmPersistedQuestion(text))
    })
    .catch(error => console.log(error))
  }
}

function confirmPersistedQuestion(text) {
  return {type: CONFIRM_PERSISTED_QUESTION, text}
}

export function addUnconfirmedQuestion(text) {
  return {type: ADD_UNCONFIRMED_QUESTION, text }
}

export function getQuizId() {
  return (dispatch, getState) => {
    axios.post('/api/quiz/create')
    .then( response => {
      dispatch(receiveQuizId(response.data.id))
    })
    .catch( error => {
      console.error(error)
    })
  }
}

function receiveQuizId(id) {
  return {type: RECEIVE_QUIZ_ID, id}
}
