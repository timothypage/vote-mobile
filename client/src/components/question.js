import React from 'react'

export default class Question extends React.Component {
  loading() {
    if(this.props.question.loading) {
      return <span> Loading...</span>
    } else {
      return
    }
  }

  render() {
  	return (
  	  <div className="form-group">
        <h4>{this.props.question.text}{this.loading()}</h4>

  	  	<button className="btn btn-primary">Add Answer</button>
  	  </div>
  	)
  }
}
