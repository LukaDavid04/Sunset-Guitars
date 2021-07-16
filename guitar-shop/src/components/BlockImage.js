import React, { Component } from 'react';
import firstImage from '../assets/str.jpg'; // Tell Webpack this JS file uses this image


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
				<img class="MainImage" src="https://cdn11.bigcommerce.com/s-yhkec2kugv/images/stencil/800x800/uploaded_images/001.jpg?t=1588890907" alt="Second card with information"/> 
				<div class="blockText">My name is Luka David and I am passionate about making some nice guitars.
				I believe in squeezing every last molecule of quality out of the materials I buy and making some beautiful creations.</div>
			</div>
			<div class="cont">
				<img class="MainImage" src="https://online.berklee.edu/takenote/wp-content/uploads/2020/07/learn_acoustic_blues_guitar_article_image.jpg" alt="Third card with information"/> 
				<div class="blockText">I am dedicated to crafting extraordinary musical instruments. I continually research the history, mechanics, 
				dynamics and physics of the guitar in order to cultivate a deeper understanding of what makes it work and how I can continue to advance my instruments.</div>
			</div>
			</div>;
	}
}

export default BlockImage;