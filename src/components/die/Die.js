import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceArray: ["one", "two", "three", "four", "five", "six"]
  };
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { locked, val, diceArray, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${diceArray[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
