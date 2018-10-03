import React, { Component } from 'react';

class Logo extends Component {
	render() {
		return (
	<div onClick={this.props.inverte} className={`bg-${this.props.color} border border-${this.props.color} rounded my-3 py-4`}>
		<p className="text-white h1 text-center" >{this.props.frase}</p>
	</div>
	);
	}
}

export default Logo;