import React, { Component } from 'react';
import firstImage from '../assets/str.jpg';
import secondImage from '../assets/dg.jpg';
import thirdImage from '../assets/tools.jpg';

class BlockImage extends Component{
	render() {
		return <div>
			<link rel="preconnect" href="https://fonts.gstatic.com"></link><link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&display=swap" rel="stylesheet"></link>
			<link rel="preconnect" href="https://fonts.gstatic.com"></link><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
			<div class="cont">
				<img class="MainImage" src={firstImage} alt="First card with title"/>
				<div class="blockTextMain">David's Guitars</div>
			</div>
			<div class="cont">
				<img class="MainImage" src={secondImage} alt="Second card with information"/> 
				<div class="blockText">My name is Luka David and I am passionate about crafting quality guitars.
				I believe in making instruments that last long, have great tone, and are most of all reliable.</div>
			</div>
			<div class="cont">
				<img class="MainImage" src={thirdImage} alt="Third card with information"/> 
				<div class="blockText">I am dedicated to every project, and I'll continually research the history, mechanics,
				and physics of each guitar in order to cultivate a deeper understanding of what makes them work and how I can continue to 
				advance my instruments.</div>
			</div>
			</div>;
	}
}

export default BlockImage;