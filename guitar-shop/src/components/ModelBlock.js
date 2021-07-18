import React, { Component } from 'react';
import "../App.css";

class ModelBlock extends Component{
	render() {
		return <div class="ModelStyle">
            <div class="container">
                <h1 class="ModelName">{this.props.name}</h1>
                <h5 class="CreatorName">By: {this.props.Creator}</h5>
                <div class="row">
                    <div class="col">
                        <div class="ModelDesc">
                            <h5>Description:</h5>
                            <h5>{this.props.description}</h5><br/>
                            <h5>About the Creator: </h5>
                            <h5>{this.props.CreatorDescription}</h5>
                        </div>
                    </div>
                    <div class="col">
                        <img class="ModelImage" src={this.props.icon} 
						width="110%" alt="Guitar"/>
                    </div>
                </div>
            </div>
		</div>;
	}
}

export default ModelBlock;