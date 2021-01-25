import './App.css';
import { BrowserRouter as Router, Switch, Route, Link
  } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Models from "./components/Models"; 
import Contact from "./components/Contact"; 
import React, { Nav, Navbar } from "react";

function App() {
  return (
    <Router>
      <div>
		{/* <Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
		</Navbar> */}
        <nav>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
