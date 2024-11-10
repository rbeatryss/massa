import React from 'react';
import './IntroBookCard.css';
import CustomButton from '../../buttons/CustomButton';
import arrow from "../../../assets/arrow.svg";

const IntroBookCard = ({ nextCardRef, moveCards }) => {
    return (
        <div className="intro-book-card">
            <div className="intro-book-card-overlay"></div>
            <div className="intro-book-card-content">
                <h2 className="intro-book-card-title">Explore the Lab</h2>
                <div className="intro-book-card-paragraph-button">
                <p className="intro-book-card-paragraph">OUR SYSTEM BLENDS PSYCHOLOGY, MEDITATIVE PRACTICES, AND THE ART OF PERFORMANCE INTO A SINGLE TRANSFORMATIVE EXPERIENCE.</p>
                <p className="intro-book-card-paragraph">WE DIVE DEEP, HELPING YOU EXPLORE HIDDEN PARTS OF YOURSELF, BUILD SELF-CONFIDENCE, AND UNCOVER YOUR POTENTIAL THROUGH FOUR STAGES IN A CYCLE OF CONTINUOUS GROWTH.</p>
                <CustomButton
                    buttonData={{ type: 'icon button', icon: arrow }}
                    scrollAction={moveCards}
                />
                </div>
            </div>
        </div>
    );
};

export default IntroBookCard;
