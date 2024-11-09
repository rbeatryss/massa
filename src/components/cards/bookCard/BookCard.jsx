import React from 'react';
import './BookCard.css';
import CustomButton from '../../buttons/CustomButton';


const BookCard = ({ title, descriptor, description, gradient, shadow, buttons, beforeBackground, backgroundImage, }) => {
    return (
        <div className="book-card"
            style={{
                background: gradient,
                boxShadow: shadow,
                backgroundImage: `url(${backgroundImage})`,          
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="book-card-before" style={{ background: beforeBackground }}></div>
            <div className="book-card-content-container">
                <h2 className="book-card-title">{title}</h2>
                <h3 className="book-card-descriptor">{descriptor}</h3>
                <p className="book-card-description">{description}</p>
            </div>
            <div className="book-card-button-container">
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

export default BookCard;