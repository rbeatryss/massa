import React, { useState, useEffect, useRef } from 'react';

import BookCard from './components/cards/bookCard/BookCard';
import BurgerButton from './components/burgerMenu/burgerButton/BurgerButton';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import SoundCard from './components/cards/soundCard/SoundCard';
import EventCard from './components/cards/eventCard/EventCard';

//assets
import whiteCard from "./assets/whiteCard.svg";
import greenCard from "./assets/greenCard.svg";
import yellowCard from "./assets/yellowCard.svg";
import redCard from "./assets/redCard.svg";
import eventBackground from "./assets/eventsIMG.png"
import eventBackground2 from "./assets/eventImage2.jpg"
import logoLanding from "./assets/logoLanding.svg"
import communityBackground from "./assets/siteBackground.png"
import email from './assets/mail.svg'
import instagram from './assets/instagram.svg'

import './App.css';
import CommunityCard from './components/cards/cummunityCard/CommunityCard';

function App() {
  const bookCardData = [
    {
      title: "Dark Side",
      descriptor: "Embrace the unseen",
      description: "Our first stage guides you through the hidden depths of the psyche, where catharsis is the beginning of the transformation journey.",
      buttons: [
        { type: 'event button', eventDate: '10/10', eventTime: '8:00 PM', eventName: 'Tea in Darkness' },
        { type: 'event button', eventDate: '15/10', eventTime: '7:00 PM', eventName: 'Lecture on shadow with Manoj Dias' },
      ],
      backgroundImage: greenCard,
      shadow: `

      0 0 30px rgba(0, 0, 0, 0.3),  
      0 0 50px rgba(0, 0, 0, 0.2),  
      0 0 80px rgba(0, 0, 0, 0.1)
    `,
    },
    {
      title: "Dicovery",
      descriptor: "The Art of Illumination",
      description: "Bridging the conscious and unconscious through self-reflection: we delve into the world of dreams and symbols.",
      buttons: [
        { type: 'coming soon', label: 'NEW CLASSES ARE COMMING SOON' },
      ],
      backgroundImage: whiteCard,
      shadow: `
      0 0 30px rgba(255, 255, 255, 0.3),  
      0 0 50px rgba(255, 255, 255, 0.2),  
      0 0 80px rgba(255, 255, 255, 0.1)
    `,
    },
    {
      title: "Learn",
      descriptor: "Conscious Connection",
      description: "Deepening our understanding of relationships and unraveling the artof aware interaction with the world.",
      buttons: [
        { type: 'coming soon', label: 'NEW CLASSES ARE COMMING SOON' },
      ],
      backgroundImage: yellowCard,
      shadow: `
        0 0 30px rgba(0, 0, 0, 0.8),
        0 0 50px rgba	(186, 129, 31, 1),
        0 0 80px rgba(0, 0, 0, 0.3)
    `,
    },
    {
      title: "Growth",
      descriptor: "Fuse Transformation",
      description: "Advanced practices designed for those who have completed the first three stages. This phase invites you to integrate every lesson and embrace the full expression of who you are.",
      buttons: [
        { type: 'coming soon', label: 'INVITE ONLY' },
      ],
      backgroundImage: redCard,
      shadow: `
      0 0 30px rgba(0, 0, 0, 0.3),  
      0 0 50px rgba(0, 0, 0, 0.2),  
      0 0 80px rgba(0, 0, 0, 0.1)
    `,
    },
  ];
  const eventCardData = [
    {
      backgroundImage: eventBackground,
      beforeBackground: "rgba(56, 33, 0, 0.5)",
      title: "MASSA CONFUSA",
      eventName: "Modular Sound Bath",
      eventDate: "Saturday, September 7th",
      eventTime: "6:45pm-7:45pm",
      eventAddress1Line: "Long Beach Rising",
      eventAddress2Line: "205 E Anaheim St, Long Beach, CA 90813",
      description: "Please arrive promptly at 6:30pm to not disrupt the sound bath experience. You are welcome to bring your own mat, cushion, and blanket or use the built in mat floor for cushion."
    },
    {
      backgroundImage: eventBackground2,
      title: "MASSA CONFUSA",
      eventName: "Modular Sound Bath",
      eventDate: "Saturday, September 7th",
      eventTime: "6:45pm-7:45pm",
      eventAddress1Line: "Long Beach Rising",
      eventAddress2Line: "205 E Anaheim St, Long Beach, CA 90813",
      description: "Please arrive promptly at 6:30pm to not disrupt the sound bath experience. You are welcome to bring your own mat, cushion, and blanket or use the built in mat floor for cushion."
    },
  ];
  const communityCardData = [
    {
      backgroundImage: communityBackground,
      date: "11.09.24",
      post: "Welcome to Massa Confusa, a transformative experience grounded in the ancient philosophy of alchemy. The concept of massa confusa, originating from the alchemical process, represents the chaotic, unformed matter at the beginning of profound transformation. Alchemists believed that nature was not soulless, and their work was a reflection of inner psychic processes. This philosophy offers a powerful lens for understanding the nature of psychic change. The journey begins with nigredo, or 'blackness'—the initial stage where old forms decay into dark chaos. Carl Jung, drawing upon this alchemical tradition, saw nigredo as a crucial part of the human psyche's evolution, referring to it as the necessary darkness at the beginning of deep inner work."
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const soundsRef = useRef(null);
  const communityRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'events':
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'sounds':
        soundsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'community':
        communityRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    toggleMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  return (
    <div className="App">
      <header className="header">
        <BurgerButton toggleMenu={toggleMenu} />
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} onNavigate={scrollToSection} />
      </header>
      <div ref={aboutRef} className="about">
        <div className="title">
          <h1>MASSA CONFUSA</h1>
        </div>
        <div className="description">
          <h3>MASSA CONFUSA IS A LOS ANGELES BASED CREATIVE LABORATORY EXPLORING THE SUBTLE ART OF TRANSFORMATION. HERE, CREATIVE CHAOS ISN’T SOMETHING TO CONTROL—IT’S A CATALYST FOR DISCOVERY.</h3>
        </div>
      </div>
      <div className="explore">
        <div className="horizontal-scroll">
          {bookCardData.map((card, index) => (
            <BookCard
              key={index}
              title={card.title}
              descriptor={card.descriptor}
              description={card.description}
              backgroundImage={card.backgroundImage}
              gradient={card.gradient}
              shadow={card.shadow}
              buttons={card.buttons}
            />
          ))}
        </div>
      </div>
      <div className="magic">
        <h2 className="magic-title">Magic Rediscovered.</h2>
        <h3 className="magic-description">
          WE BELIEVE THAT MAGIC IS NEVER FAR—SOMETIMES, IT JUST NEEDS A GENTLE NUDGE TO RISE BACK TO THE SURFACE. WHETHER YOU’RE SEEKING PERSONAL TRANSFORMATION, A BURST OF CREATIVE ENERGY, OR ANSWERS TO DEEPER QUESTIONS, OUR CREATIVE LAB IS WHERE THAT SOMETHING IS WAITING TO BE KNOWN.
        </h3>
      </div>
      <div ref={eventsRef} className="events">
        <h2 className='events-title'>Events</h2>
        <div className="horizontal-scroll">
          {eventCardData.map((card, index) => (
            <EventCard
              key={index}
              backgroundImage={card.backgroundImage}
              beforeBackground={card.beforeBackground}
              title={card.title}
              eventName={card.eventName}
              eventDate={card.eventDate}
              eventTime={card.eventTime}
              eventAddress1Line={card.eventAddress1Line}
              eventAddress2Line={card.eventAddress2Line}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div ref={soundsRef} className="sound">
        <h2 className='sound-title'>Sound</h2>
        < SoundCard />
      </div>
      <div ref={communityRef} className="community">
        <h2 className='community-title'>Community</h2>
        {communityCardData.map((card, index) => (
          <CommunityCard
            key={index}
            backgroundImage={card.backgroundImage}
            // beforeBackground={card.beforeBackground}
            date={card.date}
            post={card.post}
          />
        ))}

      </div>
      {/* <div className="text">
        <h3 className="text-animation">
        </h3>
      </div> */}
      <div className="closing">
        <img src={logoLanding} />
        <h3 className="quote">
          MASSA CONFUSA IS A SPACE FOR HOLISTIC EXPLORATION, WHERE WE EMBRACE THE UNKNOWN AS A DRIVING FORCE THROUGH EXPERIMENTATION, OBSERVATION, AND PRACTICE.
        </h3>
        <div className="title">
          <h1>MASSA CONFUSA</h1>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <p className='date'>©2024</p>
          <div className='btn-container'>
            <button className="action-btn">
              <img src={email} alt="email" />
            </button>
            <button className="action-btn">
              <img src={instagram} alt="instagram" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
