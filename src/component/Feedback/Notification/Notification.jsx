import React from 'react';
import PropTypes from "prop-types";

export const Notification = ({ message, children }) => {
  return (
    <>
      <h2>{message}</h2>
      {children}
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};