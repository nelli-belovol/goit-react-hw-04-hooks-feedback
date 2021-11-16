import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p key={shortid.generate()}>
          Good:<span className={s.statistics__value}>{good}</span>
        </p>
        <p key={shortid.generate()}>
          Neutral:<span className={s.statistics__value}>{neutral}</span>
        </p>
        <p key={shortid.generate()}>
          Bad:<span className={s.statistics__value}>{bad}</span>
        </p>
      </div>
      <p>
        Total:<span className={s.statistics__value}>{total}</span>
      </p>
      <p>
        Positive feedback:
        <span className={s.statistics__value}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
