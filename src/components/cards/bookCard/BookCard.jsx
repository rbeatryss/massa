import React, { useState, useRef } from 'react';
import './BookCard.css';
import CustomButton from '../../buttons/CustomButton';
import BookCardButtonContainerDesktop from '../../bookCardButtonContainerDesktop/BookCardButtonContainerDesktop';

const BookCard = ({
  title,
  descriptor,
  description,
  desktopDescription,
  gradient,
  shadow,
  buttons,
  overlayColor,
  backgroundImage,
}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const cardRef = useRef(null);

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  return (
    <div
      ref={cardRef}
      className="book-card"
      style={{
        background: gradient,
        boxShadow: shadow,
        '--overlay-color': overlayColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="book-card-content-container">
        <div className="book-card-header">
          <h2 className="book-card-title">{title}</h2>
          <h3 className="book-card-descriptor">{descriptor}</h3>
        </div>
        <p className="book-card-description">{description}</p>
        <p className="book-card-description-desktop">{desktopDescription}</p>
      </div>

      {/* Mobile button container */}
      <div className="book-card-button-container">
        {buttons.map((buttonData, index) => (
          <CustomButton
            key={index}
            buttonData={buttonData}
            index={index}
            isSelected={selectedButtonIndex === index}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
      {/* Desktop button container */}
      <div className="book-card-button-container-desktop">
        {buttons.map((buttonData, index) => (
          <div key={index} className="button-wrapper">
            <BookCardButtonContainerDesktop
              buttonData={buttonData}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
