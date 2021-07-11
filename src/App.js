import React, { Component } from 'react';
import './App.css';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerClick = e => {
    const chooseButton = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [chooseButton]: prevState[chooseButton] + 1,
    }));
  };

  

  // countTotalFeedback = () => {
  //   let total = 0;
  //   for (let feedback of Object.values(this.state)) {
  //     total += feedback;
  //   }
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  // };

  render() {
    const countTotalFeedback = Object.values(this.state).reduce(function (
      sum,
      current,
    ) {
      return sum + current;
    },
    0);
    console.log(countTotalFeedback);
    const countPositiveFeedbackPercentage = (
      (this.state.good / countTotalFeedback) *
      100
    ).toFixed(0);

    console.log(countPositiveFeedbackPercentage);

    const startToRender =
      this.state.good !== 0 || this.state.neutral !== 0 || this.state.bad !== 0;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedBack={this.handlerClick}
          />
        </Section>

        <Section title="Statistics">
          {startToRender ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={countTotalFeedback}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
