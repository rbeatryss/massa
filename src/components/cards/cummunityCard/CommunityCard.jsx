import React from 'react';
import './CommunityCard.css';

const CommunityCard = ({date, post }) => {
    return (
        <div className="community-card">
            <div className="community-card-container">
                <p className="community-card-date">{date}</p>
                <p className="community-card-post">{post}</p>
            </div>
        </div> 
    ); 
};

export default CommunityCard;
