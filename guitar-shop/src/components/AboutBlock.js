import React, { Component } from 'react';
import "../App.css";

class AboutBlock extends Component{
	render() {
		return <div class="ModelStyle">
            <br/><div class="container">
                <div class="row">
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-6">
                        <div class="AboutDesc">
                            <h5>{this.props.description}</h5><br/>
                            <h5>{this.props.description2}</h5><br/>
                        </div>
                        <div class="Contact">
                            <button type="button" class="btn btn-outline-danger btn-lg">
                                Contact
                            </button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img class="AboutImage" src={this.props.icon} 
						width="60%" alt="Guitar"/>
                        <h2 class="AboutName">{this.props.name}</h2>
                    </div>
                </div>
            </div>
		</div>;
	}
}

export default AboutBlock;