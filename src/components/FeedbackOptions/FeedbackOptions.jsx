import React, { Component } from 'react';
import styled from './FeedbackOptions.module.css';

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
                className={styled.button}
              >
                {elem}
              </button>
            );
          })}
      </>
    );
  }
}
