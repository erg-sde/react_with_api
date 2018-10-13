import React, { Component } from 'react';
import Message from './Message';


class Counter extends Component {
	constructor() {
		super();
		this.state = { count: 0, bar: "hello" };
	}

  incrementCount = () => {
    this.setState(
      {count: this.state.count + 1}
    )
  }
	render(){
		return(
			<div>
				<h1> Welcome to Wyncode! </h1>
				<div> You have pressed the button {this.state.count} times. {this.state.foo}</div>
        <button onClick={this.incrementCount}> Click Me! </button>
        <Message foo={this.state.bar}/>

			</div>
		);
	}
}

export default Counter  


