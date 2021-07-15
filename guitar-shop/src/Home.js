import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import BlockImage from './components/BlockImage';

function Home() {
  return (
    <Router>
		<BlockImage/>
    </Router>
  );
}

export default Home;