import React, {Component } from 'react';
import AboutBlock from './AboutBlock';
import guitar1 from '../assets/LD.jpg';
import guitar2 from '../assets/sam.jpg';
import "../App.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
	render(){
		return <div class="AboutBody">
			<h1 class="Title">Meet Our Luthiers:</h1>
			<AboutBlock 
				name="Luka David"
				icon={guitar1}
				description="Luka has been crafting guitars for several years. What started as a one passion project quickly became hobby, and then a business. Luka has worked on several models ranging from parlor guitars to dreadnought models. He gained knowledge working under several well known luthiers from the Toronto-Ottawa region."
				description2=" He has made five guitars from start to finish, with four more models coming out within the next year. Whether it is a top piece or a veneer, working with locally sourced materials has always been a priority of his."
			/><br/>
			<AboutBlock 
				name="Samuel L. Jackson"
				icon={guitar2}
				description="Sam has been crafting guitars since he was a teenager. He worked as a luthier assistant while pursuing his education and began full-time after. Sam has made guitars for clients all over North America. He specializes in classical guitars and has made over 10 different models. Samuel's clientbase is mainly located in the GTA however he has recently moved to the Ottawa area."
			/>
			<br/>	
		</div>;
	}
}

export default About;