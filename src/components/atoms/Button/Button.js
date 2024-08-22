import React from 'react';
import './Button.css';

const Button = ({ variant = 'inline', onClick, children }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
              {children}
    </button>
  );
};

export default Button;
