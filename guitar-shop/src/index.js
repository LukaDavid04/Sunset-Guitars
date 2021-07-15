import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Models from './components/Models'
import About from './components/About'
import Contact from './components/Contact'

ReactDOM.render(
  <React.StrictMode>
<Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/models" component={Models} />
        <Route path="/creators" component={About} />
		    <Route path="/FAQ" component={Contact} />
      </Switch>
	  <Footer/>
    </Router>  </React.StrictMode>,
  document.getElementById('root')
);