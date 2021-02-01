import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/"><Navbar.Brand>
			<img
				alt=""
				src="../../../Images/new/favicon.ico.jpg"
				width="30"
				height="30"
				className="d-inline-block align-top"
			/>{' '}
				Bad A's Guitars
				</Navbar.Brand>
			</LinkContainer>
			<Nav className="mr-auto">
				<LinkContainer to="/models"><Nav.Link>Models</Nav.Link></LinkContainer>
				<LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
				<LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
			</Nav>
		</Navbar>
    )
}

export default Header