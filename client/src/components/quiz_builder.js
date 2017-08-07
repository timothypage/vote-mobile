import React from 'react'
import Question from './question'

import { connect } from 'react-redux'

import { addQuestion } from '../actions'

class QuizBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      new_quiz_name: ''
    }
  }
  render() {
  	return (
  	  <div className="quiz-builder">
  	    <h2>Quiz Builder</h2>
        {this.props.questions.map( question => <Question question={question}/> )}

        <input type="text" value={this.state.new_quiz_name} onChange={(e) => this.setState({new_quiz_name: e.target.value})}/>
  	    <button className="btn btn-primary" onClick={() => this.addQuestion()}>Add Question</button>
  	  </div>
  	)
  }

  addQuestion() {
    this.props.addQuestion(this.state.new_quiz_name)
    console.log(this.props.questions)
    this.setState({new_quiz_name: ''})
  }
}

const mapStateToProps = (state, ownProps) => {
  return { questions: state.questions }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion(new_quiz_name) {
      dispatch(addQuestion(new_quiz_name))
    }
  }
}

const QuizBuilderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizBuilder)

export default QuizBuilderContainer

