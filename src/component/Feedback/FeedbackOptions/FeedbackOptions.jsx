import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="buttons" onClick={onLeaveFeedback}>
      {Object.keys(options).map(name => {
        return (
          <button
            className={s.feedback__button}
            data-name={name.toLowerCase()}
            key={shortid.generate()}
            type="button"
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};
