import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import QuizBuilder from './components/quiz_builder.js'

import { createStore } from 'redux'
import quizApp from './reducers'

let store = createStore(quizApp)

ReactDOM.render(
  <Provider store={store}>
    <QuizBuilder />
  </Provider>,
  document.getElementById('root')
);
