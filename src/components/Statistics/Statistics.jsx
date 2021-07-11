import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
        <ul>
          <li>Good: {this.props.good}</li>
          <li>Neutral: {this.props.neutral}</li>
          <li>Bad: {this.props.bad}</li>
          <li>Total: {this.props.countTotalFeedback}</li>
          <li>Positive feedback: {this.props.countPositiveFeedbackPercentage} %</li>
        </ul>
    );
  }
}
