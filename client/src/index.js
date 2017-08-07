import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import QuizBuilder from './components/quiz_builder.js'

import { createStore, applyMiddleware } from 'redux'
import quizApp from './reducers'

import thunkMiddleware from 'redux-thunk'


let store = createStore(
  quizApp,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <QuizBuilder />
  </Provider>,
  document.getElementById('root')
);
