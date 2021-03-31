import React from 'react';

const getBtnStringType = ({ primary, danger, warning }) => {
  switch (true) {
    case primary:
      return 'primary';
    case danger:
      return 'danger';
    case warning:
      return 'warning';
    default:
      return 'default';
  }
};

const Button = ({ primary, danger, warning, children = 'Click here' }) => {
  const btnClass = [getBtnStringType({ primary, danger, warning })].join(' ');
  return <button className={`btn btn-${btnClass}`}>{children}</button>;
};

export default Button;
