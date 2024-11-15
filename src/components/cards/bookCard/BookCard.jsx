import React, { useState, useEffect } from 'react';
import './BookCard.css';
import CustomButton from '../../buttons/CustomButton';
import EventButtonDesktop from '../../buttons/eventButtonDesktop/EventButtonDesktop';

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
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = React.useRef(null); 

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize); 

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedButtonIndex(); 
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

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
      {!isMobile && (
        <div className="book-card-button-container-desktop">
          {buttons.map((buttonData, index) => (
            <EventButtonDesktop
              key={index}
              buttonData={buttonData}
              index={index}
              isSelected={selectedButtonIndex === index}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookCard;