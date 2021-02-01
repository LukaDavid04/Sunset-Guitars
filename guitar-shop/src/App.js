import './App.css';
import { BrowserRouter as Router, Switch, Route, Link
  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Models from "./components/Models"; 
import Contact from "./components/Contact"; 
import React, { Nav, Navbar } from "react";
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
    <Router>
      <div>
		{/* <Navbar bg="dark" variant="dark">
			<LinkContainer to="/"></LinkContainer>
			<Navbar.Brand>Bootstrap</Navbar.Brand>
			<Nav className="mr-auto">
				<LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
				<LinkContainer to="/Models"><Nav.Link>Models</Nav.Link></LinkContainer>
				<LinkContainer to="/About"><Nav.Link>About</Nav.Link></LinkContainer>
				<LinkContainer to="/Contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
			</Nav>
		</Navbar> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
			<li>
              <Link to="/Models">Models</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
			<Route path="/models">
            <Models />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
