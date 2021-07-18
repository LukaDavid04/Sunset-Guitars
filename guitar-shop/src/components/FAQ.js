import React, {Component } from 'react';
import QuestionAnswer from './QuestionAnswer';
import "../App.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class FAQ extends Component {
	render(){
		return <div class="FAQstyle">
				<h1 class="Title">Frequently Asked Questions:</h1>
				<QuestionAnswer 
					question="What is Luthiery?" 
					answer="The construction and repair of stringed instruments such as violins and guitars."/>
				<QuestionAnswer 
					question="What is a Luthier?" 
					answer="A luthier (/ˈluːtiər/ LOO-ti-ər) is a craftsperson who builds and repairs string instruments that have a neck and a sound box. The word luthier is originally French and comes from the French word for lute. Luthiers may also teach string-instrument making, either through apprenticeship or formal classroom instruction."/>
				<QuestionAnswer 
					question="How long does it take to make a guitar?" 
					answer="This depends entirely on the luthier, however the average guitar is said to take 240 hours to be made by hand. This can vary as some luthiers prefer to work on several guitars at once, and some prefer to work on one at a time. Also it depends on the crafting methods of the luthier. Some luthiers automate some portions of their work, or use prebuilt purchasable parts to increase the speed of production while others work entirely by hand."/>
				<QuestionAnswer 
					question="What is the difference between a factory-made and handcrafted guitar?" 
					answer="Factory-made and handcrafted guitars are different in many ways. The main differences is in their design. Factories need to make instruments which are good enough to sell to a mass market at a low price. Luthiers need to make instruments which are successful tools for musicians. Luthiers aim to produce a guitar tailored to each individual customer prioritizing sound and material quality over cost of time or goods."
					answer2="Some more key factors in choosing a handcrafted guitar are due to long-term repairability, a personal relationship with the luthier, additonal choices or features, quality and finally craftsmanship. In the long term, a guitar is likely to need tuneups, maintenance or repair work. Factory instruments are often made with procedures and processes which, although quick, cheap and easy to do within the manufacturing context, can be difficult to undo or work with in the normal, post-factory setting. A personal relationship with a luthier may last for years, and become an important one. They will almost certainly be available directly to you to consult with or to take care of some difficulty, and feel a responsibility to you for any work they have done. Lastly, working with a luthier allows full freedom and control for the look, shape, feel and sound of your guitar. These guitars also typically last longer and improve their tone throughout the years. "/>
				<QuestionAnswer
					question="How do I purchase a David's Guitar?"
					answer="Purchasing a guitar or making an order is very easy. On our Models Page you can browse available guitars or learn about some qualities that you may want in your guitar. You can then contact the luthier about your interest in a already finished model or about their availability for a custom project. From then on you will be able to work with them on a future project or any other inquiries you may have."/>	
				<QuestionAnswer
					question="What if I have never purchased a custom guitar?"
					answer="No problem! Our luthiers have worked with clients of all ranges of expertise. They can guide you in researching guitar builds and how to work with a luthier."/>		
			</div>;
  	}
}

export default FAQ;