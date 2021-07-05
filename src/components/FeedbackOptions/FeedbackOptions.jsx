import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options &&
          Array.isArray(this.props.options) &&
          this.props.options.map((elem, index) => {
            return (
              <button
                type="button"
                onClick={this.props.onLeaveFeedBack}
                key={index}
              >
                {elem}
              </button>
            );
          })}
      </>
    );
  }
}
