import React, { Component } from 'react';
import ModelBlock from './ModelBlock';
import guitar1 from '../assets/parlor.jpg';
import guitar2 from '../assets/dread.jpg';
import AudioPlayer from './AudioPlayer';
import AudioPlayer2 from './AudioPlayer2';
import "../App.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Models extends Component {
	render(){
		return <div>
			<ModelBlock 
				name="Classic Parlor Guitar"
				icon={guitar1}
				description="This parlor guitar is a compact and narrow-waisted instrument, smaller than the average guitar. This model is crafted using a German Spruce top and back, as well as Indian Rosewood for the sides. What this model lacks in size it more than makes up for in portability and quality of tone. The name comes from the rooms in which the guitar was typically played in the late 19th century."
				Creator="Luka David"
				CreatorDescription="Luka has been crafting guitars for several years. He has worked with a plethora of clients and has made both custom and classical guitars. Located in Ottawa, he has worked with clients from Quebec, Toronto and even London."
			/>
			<AudioPlayer/>
			<ModelBlock 
				name="Maple Dreadnought"
				icon={guitar2}
				description="This dreadnought guitar, characterized by it's large body and relatively undefined waist is part of our newer set of instruments. This model is crafted with a Maple top and back using wood sourced from Ontario. It's upper and lower bouts of the guitar are quite similar in width when compared with classical guitars and other acoustic guitar shapes such as Grand Auditoriums or Concert guitars."
				Creator="Luka David"
				CreatorDescription="Luka has been crafting guitars for several years. He has worked with a plethora of clients and has made both custom and classical guitars. Located in Ottawa, he has worked with clients from Quebec, Toronto and even London."
			/>
			<AudioPlayer2/>
		</div>;
  }
}

export default Models;