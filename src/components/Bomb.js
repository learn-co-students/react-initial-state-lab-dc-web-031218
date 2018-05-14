// Bomb Component Code Goes Here
import React from "react";

export default class Bomb extends React.Component {
  constructor({ initialCount }) {
    super();
    this.state = {
      secondsLeft: initialCount
    };
  }
  render() {
    const state = !this.state.secondsLeft
      ? `Boom!`
      : `${this.state.secondsLeft} seconds left before I go boom!`;
    return <div>{state}</div>;
  }
}
