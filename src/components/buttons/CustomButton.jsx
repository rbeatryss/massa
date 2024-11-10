import React, { useState, useEffect } from 'react';
import './CustomButton.css';

const CustomButton = ({ buttonData, link, scrollAction }) => {
    const { type, eventName, eventDate, eventTime, label, icon } = buttonData;

    const buttonClass = type === 'coming soon' ? 'coming-soon-button' 
                    : type === 'event button' ? 'event-button' 
                    : type === 'small button' ? 'small-button'
                    : type === 'icon button' ? 'icon-button'
                    : 'action-button';

    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    const handleClick = () => {
        if (scrollAction) {
            scrollAction();
        } else {
            if (isMobile) {
                if (clicked) {
                    window.location.href = link;
                } else {
                    setClicked(true);
                }
            } else {
                window.location.href = link;
            }
        }
    };

    return (
        <button 
            className={`custom-button ${buttonClass} ${clicked && isMobile ? 'bright' : ''}`} 
            onClick={handleClick}
        >
            {type === 'event button' && eventName && eventDate && eventTime ? (
                <div className="event-content">
                <div className="event-details">
                    <span className="event-date">{eventDate}</span>
                    <span className="event-time">{eventTime}</span>
                </div>
                <div className="event-name-container">
                    <span className="event-name">{eventName}</span>
                </div>
            </div>
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
