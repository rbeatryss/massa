import React from 'react';
import './BookCardButtonContainerDesktop.css';
import CustomButton from '../buttons/CustomButton';

const BookCardButtonContainerDesktop = ({ buttonData }) => {
    const { eventName, eventDate, eventTime } = buttonData;
    return (
        <div className="desktop-button-wrapper">
            <div className="desktop-button-card-content">
                <div className="desktop-button-card-event-name-container">
                    <span className="desktop-button-event-name">{eventName}</span>
                </div>
                <div className="desktop-button-card-event-details">
                    <div className="desktop-button-card-date-time">
                        <h3 className="desktop-button-event-date">{eventDate}</h3>
                        <h3 className="desktop-button-event-time">{eventTime}</h3>
                    </div>
                    <div className="desktop-button-card-button">
                        <CustomButton buttonData={{ type: 'blue text button', label: 'Book' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCardButtonContainerDesktop;
