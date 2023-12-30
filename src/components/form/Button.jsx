import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    width: '100%',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#e0b2ff',
    color: '#ffffff',
    fontSize: '16px',

    fontWeight: 700,
    lineHeight: '22px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Sign up',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;