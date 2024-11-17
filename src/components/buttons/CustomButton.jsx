// import React, { useState, useEffect } from 'react';
import './CustomButton.css';
import EventButton from './eventButton';


const CustomButton = ({ buttonData }) => {
  const { type, link, eventName, eventDate, eventTime, label, backgroundColor, content } = buttonData;

  const buttonClass =
    type === 'coming soon'
      ? 'coming-soon-button'
      : type === 'event button'
        ? 'event-button'
        : type === 'blue text button'
          ? 'blue-text-button'
          : type === 'text button'
            ? 'text-button'
            : type === 'icon button'
              ? 'icon-button'
              : 'custom-button';

  const isDisabled = type === 'coming soon';

  // const [clicked, setClicked] = useState(isSelected); 

  // useEffect(() => {
  //   setClicked(isSelected);
  // }, [isSelected]);

  // const handleClick = () => {
  //   if (scrollAction) {
  //     scrollAction();
  //   } else {
  //     setClicked(true);
  //     onButtonClick(index); 
  //   }
  // };

  return (
    <button
      className={`custom-button ${buttonClass} }`}
      // onClick={handleClick}
      style={{ backgroundColor: backgroundColor }}
      disabled={isDisabled}
    >
      {type === 'event button' && eventName && eventDate && eventTime ? (
        <EventButton
          eventName={eventName}
          eventDate={eventDate}
          eventTime={eventTime}
          content={content} 
        />
      ) : type === 'blue text button' && label ? (
        <span>
          {label} {content && <span className="pseudo-content">({content})</span>}
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default CustomButton;
