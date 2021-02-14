import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Footer = () => {
    return (
		<div style="foot">
        <Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
				<LinkContainer to="/models"><Nav.Link>Models</Nav.Link></LinkContainer>
				<LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
				<LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
			</Nav>
		</Navbar>
		</div>
    )
}

export default Footer