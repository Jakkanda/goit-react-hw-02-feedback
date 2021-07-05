import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlerClick = e => {
    const chooseButton = e.target.textContent.toLowerCase();
    console.dir(chooseButton);
    this.setState(prevState => ({
      [chooseButton]: prevState[chooseButton] + 1,
    }));
  };
  render() {
    return (
      <div className="Feedback">
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handlerClick}>
          Good
        </button>
        <button type="button" onClick={this.handlerClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handlerClick}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
      </div>
    );
  }
}
