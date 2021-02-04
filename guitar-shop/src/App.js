import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
		<img class="MainImage" src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/05/PRS-SE-P20E-Gear-Patrol-Lead-Full.jpg" alt="Second card with information"/> 
		<img class="MainImage" src="https://cdn.mos.cms.futurecdn.net/2ahx5EMCazvGZWA224XxFb.jpg" alt="First card with title"/> 
		<img class="MainImage" src="https://online.berklee.edu/takenote/wp-content/uploads/2020/07/learn_acoustic_blues_guitar_article_image.jpg" alt="Third card with information"/> 
      </div>
    </Router>
  );
}

export default App;
