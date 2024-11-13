import React from 'react';
import './BookCard.css';
import CustomButton from '../../buttons/CustomButton';


const BookCard = ({ title, descriptor, description, mobileDescription, desktopDescription, gradient, shadow, buttons, overlayColor, backgroundImage, }) => {

    return (
        <div className="book-card"
            style={{
                background: gradient,
                boxShadow: shadow,
                '--overlay-color': overlayColor,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="book-card-content-container">
            <div className="book-card-header">
                <h2 className="book-card-title">{title}</h2>
                <h3 className="book-card-descriptor">{descriptor}</h3>
                </div>
                <p className=".book-card-description">{description}</p>
                <p className=".book-card-description-mobile">{mobileDescription}</p>
                <p className=".book-card-description-desktop">{desktopDescription}</p>
            </div>
            <div className="book-card-button-container">
                {buttons.map((buttonData, index) => (
                    <CustomButton key={index} buttonData={buttonData} />
                ))}
            </div>
        </div>
    );
};

export default BookCard;