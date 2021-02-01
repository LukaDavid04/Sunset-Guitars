import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Models from './components/Models'
import About from './components/About'

ReactDOM.render(
  <React.StrictMode>
<Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/models" component={Models} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
