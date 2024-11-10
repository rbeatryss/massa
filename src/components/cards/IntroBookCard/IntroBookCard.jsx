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
                <p className="intro-book-card-paragraph">Our system blends psychology, meditative practices, and the art of performance into a single transformative experience.</p>
                <p className="intro-book-card-paragraph">We dive deep, helping you explore hidden parts of yourself, build self-confidence, and uncover your potential through four stages in a cycle of continuous growth.</p>
                <CustomButton
                    buttonData={{ type: 'icon button', icon: arrow }}
                    scrollAction={moveCards}
                />
            </div>
        </div>
    );
};

export default IntroBookCard;
