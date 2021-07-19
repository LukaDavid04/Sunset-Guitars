import React, {Component } from 'react';
import "../App.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactBlock from './ContactBlock'

class Contact extends Component {
	render(){
		return <div class="FAQstyle">
				<h1 class="Title">Contact Us:</h1>
				<ContactBlock/><br/>
			</div>;
  	}
}

export default Contact;