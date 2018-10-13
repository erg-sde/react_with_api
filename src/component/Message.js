import React, { Component } from 'react';


class Message extends Component {

	render(){
		return(
			<div>
				<h1> I have a message for you: </h1>
				<div> {this.props.foo}</div>
			</div>
		);
	}
}

export default Message
