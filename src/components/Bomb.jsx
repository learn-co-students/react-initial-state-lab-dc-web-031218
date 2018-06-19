// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			secondsLeft: props.initialCount
		}
	}

	bombbedom(){
		const secondsLeft = this.state.secondsLeft;
		if (secondsLeft !== 0){
			return <p>{secondsLeft} seconds left before I go boom!</p>
		} else {
			return <p>Boom!</p>
			}
	}

	render(){
		const secondsLeft = this.state.secondsLeft;

		return (
			this.bombbedom()
			)
	}
}

export default Bomb;