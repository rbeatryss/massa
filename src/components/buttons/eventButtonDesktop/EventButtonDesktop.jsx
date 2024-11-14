// src/components/buttons/EventButtonDesktop.js
import React from 'react';
import './EventButtonDesktop.css';

const EventButtonDesktop = ({ eventName, eventDate, eventTime, address }) => {
  return (
    <div className="event-button-desktop">
      <div className="event-details">
        <span className="event-date">{eventDate}</span>
        <span className="event-time">{eventTime}</span>
        <span className="event-address">{address}</span>
      </div>
      <div className="event-name-container">
        <span className="event-name">{eventName}</span>
      </div>
      <button className="event-button-action">RSVP</button> {/* The button with hover effect */}
    </div>
  );
};

export default EventButtonDesktop;
