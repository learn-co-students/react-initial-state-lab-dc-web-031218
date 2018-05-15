// Bomb Component Code Goes Here
import React from "react";

class Bomb extends React.Component {
  constructor (prop) {
    super(prop);

    this.state = {
      secondsLeft: prop.initialCount
    }
  }

  render () {
    return (
      <div>
        {this.state.secondsLeft > 0 ?
          `${this.state.secondsLeft} seconds left before I go boom!`
          :
          "Boom!"}
      </div>
    )
  }
}

export default Bomb;
