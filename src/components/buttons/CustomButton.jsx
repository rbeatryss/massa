// CustomButton.jsx
import React from 'react';
import './CustomButton.css'; // Import the button's CSS file for styling

const CustomButton = ({ type, eventName, eventDate, eventTime, label }) => {
    const buttonClass = type === 'coming soon' ? 'coming-soon-button' : 'event-button';

    return (
        <button className={`custom-button ${buttonClass}`}>
            {type === 'event button' && eventName && eventDate && eventTime ? (
                <div>
                    <span className="event-date">{eventDate}</span>
                    <span className="event-time">{eventTime}</span>
                    <span className="event-name">{eventName}</span>
                </div>
            ) : (
                <span>{label}</span>
            )}
        </button>
    );
};

export default CustomButton;
