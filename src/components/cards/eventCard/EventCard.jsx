import React from 'react';
import './EventCard.css';
import CustomButton from '../../buttons/CustomButton';


const EventCard = ({ backgroundImage, title, eventName, eventDate, eventTime, eventAddress1Line, eventAddress2Line, description, overlayColor, }) => {
    return (
        <div className="event-card"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                '--overlay-color': overlayColor,
            }}>
            <div className="event-card-content-container">
                <div className="event-card-title-name">
                    <p className="event-card-title">{title}</p>
                    <p className="event-card-event-name">{eventName}</p>
                </div>
                <div className="event-card-date-time">
                    <p className="event-card-event-date">{eventDate}</p>
                    <p className="event-card-event-time">{eventTime}</p>
                </div>
                <div className="event-card-address">
                    <p className="event-card-event-address">{eventAddress1Line}</p>
                    <p className="event-card-event-address">{eventAddress2Line}</p>
                </div>
                <div className="event-card-description">
                    <p className="event-card-description">{description}</p>
                </div>

                <div className="event-card-button-container">
                    <CustomButton buttonData={{ type: 'blue text button', label: 'Book' }} />
                    {/* {buttons.map((button, index) => {
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
                })} */}
                </div>
            </div>
        </div>
    );
};

export default EventCard;