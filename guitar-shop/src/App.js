import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import BlockImage from './components/BlockImage';

function App() {
  return (
    <Router>
      <div>
		<BlockImage/>
      </div>
    </Router>
  );
}

export default App;
