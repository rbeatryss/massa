import React from 'react';
import './EventCard.css';
import CustomButton from '../buttons/CustomButton';


const EventCard = ({ title, descriptor, description, gradient, shadow, buttons, beforeBackground, backgroundImage, }) => {
    return (
        <div className="card-event"
            style={{
                background: gradient,
                boxShadow: shadow,
                backgroundImage: `url(${backgroundImage})`,          
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="card-event-before" style={{ background: beforeBackground }}></div> {/* Added a wrapper for before pseudo-element */}
            <div className="event-container">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-descriptor">{descriptor}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="button-container">
                {buttons.map((button, index) => {
                    return (
                        <CustomButton
                            key={index}
                            type={button.type}
                            eventName={button.eventName}
                            eventDate={button.eventDate}
                            eventTime={button.eventTime}
                            label={button.label}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default EventCard;