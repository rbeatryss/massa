import React from 'react';
import './SoundCard.css';
import CustomButton from '../../buttons/CustomButton';
import soundCard from '../../../assets/soundCard.svg'


const SoundCard = ({ title, descriptor, list }) => {
    return (
        <div className="sound-card"
        style={{
            backgroundImage: `url(${soundCard})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          >
        <div className="sound-card-content-container">
            <p className="sound-card-title">MC01</p>
            <p className="sound-card-descriptor">REJOICE - YOU ARE AT THE BEGINNING</p>
            <div className="sound-card-list-container">
                <ul>
                    <li>20211201 - Ryuichi Sakamoto</li>
                    <li>Franklin's Dream - Biosphere</li>
                    <li>In A Beautiful Place Out In The Country - Boards of Canada</li>
                    <li> A Midsummer Nice Dream - Ochre</li>
                    <li>Flight from the City - Jóhann Jóhannsson, Yuki Numata Resnick, Tarn Travers, Ben Russell, Clarice Jensen</li>
                    <li>Gossamer Silk - Pauline Anna Strom</li>
                    <li>Garden Of Paradise - 2006 Digital Remaster - Steve Hillage</li>
                    <li>Discreet Music - Remastered 2004 - Brian Eno</li>
                    <li>analogue winter - .diedlonely</li>
                    <li>Le soleil dans le monde - Domenique Dumont</li>
                    <li>B... Arp Forever V3 (109.613 BPM) - Vegyn</li>
                    <li>body - Gia Margaret</li>
                    <li> a way out - my head is empty, Miranda Rain</li>
                    <li> Svefn-g-englar - Sigur Rós</li>
                </ul>
            </div>
            <div className="sound-card-button-container">
            <CustomButton buttonData={{ type: 'text button', label: 'Listen' }} />
            </div>
        </div>
        </div>
    );
};

export default SoundCard;