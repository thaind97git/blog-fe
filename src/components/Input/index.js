import React from 'react';

const Input = ({ label, required, name }) => {
  return (
    <div className="form-control">
      {label && <label htmlFor={name}>Password</label>}
      <input name={name} required={required} />
    </div>
  );
};

export default Input;
