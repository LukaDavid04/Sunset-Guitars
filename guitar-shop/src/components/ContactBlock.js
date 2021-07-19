import React, { Component } from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap'
import "../App.css";

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});

class ContactBlock extends Component{
	render() {
	return <div class="container">
			<Form>
				<p class="ContactStyle">This is the platform you can use to reach out to one of our luthiers. You can inquire about one of their available modals or about a custom project. We will use your contact information to reach out to you in the future.</p>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="nameInput">
							<Form.Label>First Name:</Form.Label>
							<Form.Control type="name" placeholder="John" required/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="nameInput">
							<Form.Label>Last Name:</Form.Label>
							<Form.Control type="name" placeholder="Doe" required/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Email address:</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" required/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="tel">
							<Form.Label>Phone Number:</Form.Label>
							<Form.Control type="tel" placeholder="(613)-456-6789" required/>
						</Form.Group>
					</Col>
				</Row>
				Which Luthier would you like to Contact?
				{['radio'].map((type) => (
					<div key={`default-${type}`} className="mb-3">
					<Form.Check 
						type={type}
						id={`default-${type}-1`}
						label={`Luka`}
					/>
					<Form.Check
						type={type}
						id={`default-${type}-2`}
						label={`Sam`}
					/>
					</div>
				))}
				What topics would you like to discuss?
				{['checkbox'].map((type) => (
					<div key={`default-${type}`} className="mb-3">
					<Form.Check 
						type={type}
						id={`default-${type}-1`}
						label={`Available Models`}
					/>
					<Form.Check
						type={type}
						id={`default-${type}-2`}
						label={`Instrument Repair`}
					/>
					<Form.Check
						type={type}
						id={`default-${type}-2`}
						label={`Custom Projects`}
					/>
					<Form.Check
						type={type}
						id={`default-${type}-2`}
						label={`Availability`}
					/>
					</div>
				))}
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Leave a message!</Form.Label>
					<Form.Control as="textarea" rows={5} />
				</Form.Group>
				<div class="but">
					<Button variant="btn btn-outline-danger btn-lg" type="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	}
}

export default ContactBlock;