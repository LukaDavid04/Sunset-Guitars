import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Models from './components/Models'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

ReactDOM.render(
  <React.StrictMode>
  <link rel="preconnect" href="https://fonts.gstatic.com"></link><link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap" rel="stylesheet"></link>
	<link rel="preconnect" href="https://fonts.gstatic.com"></link><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
  <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/models" component={Models} />
        <Route path="/luthiers" component={About} />
        <Route path="/contact" component={Contact} />
		    <Route path="/FAQ" component={FAQ} />
      </Switch>
	  <Footer/>
    </Router>  
    </React.StrictMode>,
  document.getElementById('root')
);