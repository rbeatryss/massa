import React from 'react';
import './EventButton.css';

const EventButton = ({ eventName, eventDate, eventTime }) => {
  return (
    <div className="event-content">
      <div className="event-details">
        <span className="event-date">{eventDate}</span>
        <span className="event-time">{eventTime}</span>
      </div>
      <div className="event-name-container">
        <span className="event-name">{eventName}</span>
      </div>
    </div>
  );
};

export default EventButton;
