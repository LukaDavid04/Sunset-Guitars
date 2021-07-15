import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Footer = () => {
    return (
		<div>
        <Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
				<LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
				<LinkContainer to="/models"><Nav.Link>Models</Nav.Link></LinkContainer>
				<LinkContainer to="/creators"><Nav.Link>Creators</Nav.Link></LinkContainer>
				<LinkContainer to="/FAQ"><Nav.Link>FAQ</Nav.Link></LinkContainer>
			</Nav>
		</Navbar>
		</div>
    )
}

export default Footer