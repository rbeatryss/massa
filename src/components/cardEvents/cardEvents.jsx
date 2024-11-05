import React from 'react';

const cardEvents = ({ backgroundColor, gradient, children }) => {
  const cardStyle = {
    background: gradient ? `linear-gradient(${gradient})` : backgroundColor,
    padding: '20px',
    borderRadius: '8px',
    color: '#fff',
    width: '200px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div style={cardStyle}>{children}</div>;
};

export default cardEvents;
