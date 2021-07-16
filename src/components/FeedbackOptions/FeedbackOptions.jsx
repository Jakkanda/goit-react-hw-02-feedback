import React from 'react';
import styled from './FeedbackOptions.module.css';

export function FeedbackOptions ({options, onLeaveFeedBack}) {
    return (
      <>
        {options?.map((elem, index) => {
            return (
              <button
                type="button"
                onClick={onLeaveFeedBack}
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

