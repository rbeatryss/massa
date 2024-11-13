// src/components/buttons/CustomButton.js
import React, { useState, useEffect } from 'react';
import './CustomButton.css';
import EventButton from './eventButton';


const CustomButton = ({ buttonData, link, scrollAction, isSelected, onButtonClick, index }) => {
  const { type, eventName, eventDate, eventTime, label, icon } = buttonData;

  const buttonClass =
    type === 'coming soon'
      ? 'coming-soon-button'
      : type === 'event button'
      ? 'event-button'
      : type === 'small button'
      ? 'small-button'
      : type === 'icon button'
      ? 'icon-button'
      : 'action-button';

  const [clicked, setClicked] = useState(isSelected); // Set initial state based on selection

  useEffect(() => {
    setClicked(isSelected); // Update state when the button's selection status changes
  }, [isSelected]);

  const handleClick = () => {
    if (scrollAction) {
      scrollAction();
    } else {
      setClicked(true);
      onButtonClick(index); 
    }
  };

  return (
    <button
      className={`custom-button ${buttonClass} ${clicked ? 'bright' : ''}`}
      onClick={handleClick}
    >
      {type === 'event button' && eventName && eventDate && eventTime ? (
        <EventButton eventName={eventName} eventDate={eventDate} eventTime={eventTime} />
      ) : type === 'icon button' && icon ? (
        <span className="icon">
          <img src={icon} alt="icon" />
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default CustomButton;
