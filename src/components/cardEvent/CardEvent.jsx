import React from 'react';
import './CardEvent.css'; 

const CardEvent = ({ title, description, gradient, shadow, buttons }) => {
    return (
        <div className="card-event" style={{ background: gradient, boxShadow: shadow }}>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <div className="button-container">
                {buttons.map((buttonLabel, index) => (
                    <button key={index} className="card-button">
                        {buttonLabel}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CardEvent;
