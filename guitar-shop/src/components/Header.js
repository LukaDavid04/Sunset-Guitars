import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/home"><Nav.Link>
			<Navbar.Brand>
				<img alt="" src="https://www.designfreelogoonline.com/wp-content/uploads/2016/01/000676-Free-logo-maker-guitarl-Logo-Templates-04.png"
					width="10%"
					height="10%"
					className="d-inline-block align-top"
				/>
			</Navbar.Brand>
			</Nav.Link></LinkContainer>
			<div class="main-link">
				<Nav className="mr-auto">
					David's Guitars
				</Nav>
			</div>
			<div class="links">
				<Nav className="mr-auto">
					<LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
					<LinkContainer to="/models"><Nav.Link>Models</Nav.Link></LinkContainer>
					<LinkContainer to="/luthiers"><Nav.Link>Luthiers</Nav.Link></LinkContainer>
					<LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
					<LinkContainer to="/FAQ"><Nav.Link>FAQ</Nav.Link></LinkContainer>
				</Nav>
			</div>
			<div class="googleButton"><div id="google_translate_element"></div></div>
		</Navbar>
    )
}

export default Header