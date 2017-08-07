import React from 'react'

export default class Question extends React.Component {
  render() {
  	return (
  	  <div className="form-group">
        <h4>{this.props.question.text}</h4>

  	  	<button className="btn btn-primary">Add Answer</button>
  	  </div>
  	)
  }
}
