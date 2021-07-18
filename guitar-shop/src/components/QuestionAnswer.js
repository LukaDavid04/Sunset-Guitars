import React, { Component } from 'react';
import "../App.css";

class QuestionAnswer extends Component{
	render() {
		return <div class="ModelStyle">
            <h3 class="Question">{this.props.question}</h3>    
            <h5 class="Answer">{this.props.answer}</h5>
            <h5 class="Answer">{this.props.answer2}</h5>
            <br/>
		</div>;
	}
}

export default QuestionAnswer;