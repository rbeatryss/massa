import React from 'react';
import './CommunityCard.css';

const CommunityCard = ({ backgroundImage, date, post }) => {
    return (
        <div className="community-card"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="community-card-container">
                <p className="community-card-date">{date}</p>
                <p className="community-card-post">{post}</p>
            </div>
        </div> 
    ); 
};

export default CommunityCard;
