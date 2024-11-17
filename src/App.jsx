import React, { useState, useEffect, useRef } from 'react';

import BookCard from './components/cards/bookCard/BookCard';
import BurgerButton from './components/burgerMenu/burgerButton/BurgerButton';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import SoundCard from './components/cards/soundCard/SoundCard';
import EventCard from './components/cards/eventCard/EventCard';
import CommunityCard from './components/cards/cummunityCard/CommunityCard';
import IntroBookCard from './components/cards/IntroBookCard/IntroBookCard';

//assets
import whiteCard from "./assets/whiteCard.svg";
// import greenCard from "./assets/greenCard.svg";
import greenCard from "./assets/green-test.svg";
import yellowCard from "./assets/yellowCard.svg";
import redCard from "./assets/redCard.svg";
import eventBackground from "./assets/eventBackground.png"
import eventBackground2 from "./assets/eventBackground2.png"
import textAnimationDesktop from "./assets/text-animation-desktop.svg"
import textAnimation from "./assets/text-animation.svg"
import logoWhite from "./assets/logoWhite.svg"
import email from './assets/mail.svg'
import instagram from './assets/instagram.svg'

import './App.css';
import HorizontalScroll from './components/horizontalScroll/HorizontalScroll';

function App() {
  const bookCardData = [
    {
      title: "Dark Side",
      descriptor: "Embrace the unseen",
      description: "Our first stage guides you through the hidden depths of the psyche, where catharsis is the beginning of the transformation journey.",
      desktopDescription: "OUR FIRST STAGE GUIDES YOU THROUGH THE HIDDEN DEPTHS OF THE PSYCHE, WHERE CATHARSIS IS THE BEGINNING OF THE TRANSFORMATION JOURNEY.",
      buttons: [
        { type: 'event button', eventDate: '15/10', eventTime: '7-6pm', eventName: 'Void Movement LA, Downton', backgroundColor:'rgba(0, 0, 0, 0.2)' },
        { type: 'event button', eventDate: '10/10', eventTime: '8-9pm', eventName: 'Tea in Darkness', backgroundColor:'rgba(0, 0, 0, 0.2)'},
        { type: 'event button', eventDate: '15/10', eventTime: '4-5pm', eventName: 'Lecture on shadow with Manoj Dias', backgroundColor:'rgba(0, 0, 0, 0.2)' },
      ],
      backgroundImage: greenCard,
      overlayColor: 'rgba(105, 120, 94, 0.1)',
      //   shadow: `

      //   0 0 30px rgba(0, 0, 0, 0.3),  
      //   0 0 50px rgba(0, 0, 0, 0.2),  
      //   0 0 80px rgba(0, 0, 0, 0.1)
      // `,
    },
    {
      title: "Discovery",
      descriptor: "The Art of Illumination",
      description: "Bridging the conscious and unconscious through self-reflection: we delve into the world of dreams and symbols.",
      desktopDescription: "BRIDGING THE CONSCIOUS AND UNCONSCIOUS THROUGH SELF-REFLECTION: WE DELVE INTO THE WORLD OF DREAMS AND SYMBOLS.",
      buttons: [
        { type: 'event button', eventDate: '05/10', eventTime: '7-6pm', eventName: 'Active imagination: Inner marketplace', content: 'Sold out'},
        { type: 'event button', eventDate: '10/10', eventTime: '8-9pm', eventName: 'Breathwork: Light The Bulb' },
        { type: 'event button', eventDate: '15/10', eventTime: '4-5pm', eventName: 'Acupuncture and Sound' },
      ],
      backgroundImage: whiteCard,
      // backgroundImage: 'radial-gradient(circle, #E1CDC2 0%, #AFCADE 42%, #EEEEEE 100%)',
      overlayColor: 'rgba(255, 255, 255, 0.1)',
      //   shadow: `
      //   0 0 30px rgba(255, 255, 255, 0.3),  
      //   0 0 50px rgba(255, 255, 255, 0.2),  
      //   0 0 80px rgba(255, 255, 255, 0.1)
      // `,
    },
    {
      title: "Learn",
      descriptor: "Conscious Connection",
      description: "Deepening our understanding of relationships and unraveling the artof aware interaction with the world.",
      desktopDescription: "DEEPENING OUR UNDERSTANDING OF RELATIONSHIPS AND UNRAVELING THE ARTOF AWARE INTERACTION WITH THE WORLD.",
      buttons: [
        { type: 'event button', eventDate: '05/10', eventTime: '7-6pm', eventName: 'Contact Improvisation' },
        { type: 'event button', eventDate: '10/10', eventTime: '8-9pm', eventName: 'Relating Circle' },
        { type: 'event button', eventDate: '15/10', eventTime: '4-5pm', eventName: 'Movement with Karimou' },
      ],
      backgroundImage: yellowCard,
      overlayColor: 'rgba(234, 172, 91, 0.1)',
      //   shadow: `
      //     0 0 30px rgba(0, 0, 0, 0.8),
      //     0 0 50px rgba	(186, 129, 31, 1),
      //     0 0 80px rgba(0, 0, 0, 0.3)
      // `,
    },
    {
      title: "Growth",
      descriptor: "Fuse Transformation",
      description: "Advanced practices designed for those who have completed the first three stages. This phase invites you to integrate every lesson and embrace the full expression of who you are.",
      desktopDescription: "ADVANCED PRACTICES DESIGNED FOR THOSE WHO HAVE COMPLETED THE FIRST THREE STAGES. THIS PHASE INVITES YOU TO INTEGRATE EVERY LESSON AND EMBRACE THE FULL EXPRESSION OF WHO YOU ARE.",
      buttons: [
        { type: 'coming soon', label: 'INVITE ONLY' },
      ],
      backgroundImage: redCard,
      overlayColor: 'rgba(224, 164, 87, 0.1)',

      //   shadow: `
      //   0 0 30px rgba(0, 0, 0, 0.3),  
      //   0 0 50px rgba(0, 0, 0, 0.2),  
      //   0 0 80px rgba(0, 0, 0, 0.1)
      // `,
    },
  ];
  const eventCardData = [
    {
      backgroundImage: eventBackground,
      title: "MASSA CONFUSA",
      eventName: "Modular Sound Bath",
      eventDate: "Saturday, September 7th",
      eventTime: "6:45pm-7:45pm",
      eventAddress1Line: "Long Beach Rising",
      eventAddress2Line: "205 E Anaheim St, Long Beach, CA 90813",
      description: "Please arrive promptly at 6:30pm to not disrupt the sound bath experience. You are welcome to bring your own mat, cushion, and blanket or use the built in mat floor for cushion."
    },
    {
      backgroundImage: eventBackground2,
      overlayColor: 'rgba(67, 12, 22, 0.5)',
      title: "MASSA CONFUSA",
      eventName: "Modular Sound Bath",
      eventDate: "Saturday, September 7th",
      eventTime: "6:45pm-7:45pm",
      eventAddress1Line: "Long Beach Rising",
      eventAddress2Line: "205 E Anaheim St, Long Beach, CA 90813",
      description: "Please arrive promptly at 6:30pm to not disrupt the sound bath experience. You are welcome to bring your own mat, cushion, and blanket or use the built in mat floor for cushion."
    },
    {
      backgroundImage: eventBackground,
      title: "MASSA CONFUSA",
      eventName: "Modular Sound Bath",
      eventDate: "Saturday, September 7th",
      eventTime: "6:45pm-7:45pm",
      eventAddress1Line: "Long Beach Rising",
      eventAddress2Line: "205 E Anaheim St, Long Beach, CA 90813",
      description: "Please arrive promptly at 6:30pm to not disrupt the sound bath experience. You are welcome to bring your own mat, cushion, and blanket or use the built in mat floor for cushion."
    },
  ];
  const communityCardData = [
    {
      date: "11.09.24",
      post: "a transformative experience grounded in the ancient philosophy of alchemy. The concept of massa confusa, originating from the alchemical process, represents the chaotic, unformed matter at the beginning of profound transformation. Alchemists believed that nature was not soulless, and their work was a reflection of inner psychic processes. This philosophy offers a powerful lens for understanding the nature of psychic change. The journey begins with nigredo, or 'blackness'—the initial stage where old forms decay into dark chaos. Carl Jung, drawing upon this alchemical tradition, saw nigredo as a crucial part of the human psyche's evolution, referring to it as the necessary darkness at the beginning of deep inner work."
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
      <div className="about">
        <div className="about-description">
          <h3>MASSA           CONFUSA            IS         A           LOS          ANGELES         BASED        CREATIVE          LABORATORY          EXPLORING         THE        SUBTLE          ART          OF<br />TRANSFORMATION. HERE, CREATIVE CHAOS ISN'T SOMETHING TO CONTROL—IT'S A CATALYST FOR DISCOVERY.</h3>
        </div>
        {/* <div className="about-description-desktop">
          <h3 className="about-description-desktop-one">MASSA CONFUSA IS A LOS ANGELES BASED CREATIVE LABORATORY EXPLORING THE SUBTLE ART OF </h3>
          <h3 className="about-description-desktop-two">TRANSFORMATION. HERE, CREATIVE CHAOS ISN'T SOMETHING TO CONTROL—IT'S A CATALYST FOR DISCOVERY.</h3>
        </div> */}
        <div className="about-title">
          <h1>MASSA CONFUSA</h1>
        </div>
      </div>
      <div className="explore">
        <HorizontalScroll>
          <IntroBookCard />
          {bookCardData.map((card, index) => (
            <BookCard
              key={index}
              title={card.title}
              descriptor={card.descriptor}
              description={card.description}
              desktopDescription={card.desktopDescription}
              backgroundImage={card.backgroundImage}
              overlayColor={card.overlayColor}
              shadow={card.shadow}
              buttons={card.buttons}
            />
          ))}
        </HorizontalScroll>
      </div>
      <div className="magic">
        <h2 className="magic-title">Magic <br /> Rediscovered.</h2>
        {/* <h3 className="magic-description">
          WE BELIEVE THAT MAGIC IS NEVER FAR—<br></br>SOMETIMES, IT JUST NEEDS A GENTLE NUDGE TO<br></br>RISE BACK TO THE SURFACE. WHETHER YOU’RE<br></br>SEEKING PERSONAL TRANSFORMATION,<br></br>A BURST OF CREATIVE ENERGY,<br></br>OR ANSWERS TO DEEPER QUESTIONS, OUR<br></br>CREATIVE LAB IS WHERE THAT SOMETHING IS<br></br>WAITING TO BE KNOWN.
        </h3> */}
        <h3 className="magic-description">
          WE BELIEVE THAT MAGIC IS NEVER FAR—SOMETIMES, IT JUST NEEDS A GENTLE NUDGE TO RISE BACK TO THE SURFACE. WHETHER YOU’RE SEEKING PERSONAL TRANSFORMATION, A BURST OF CREATIVE ENERGY, OR ANSWERS TO DEEPER QUESTIONS, OUR CREATIVE LAB IS WHERE THAT SOMETHING IS WAITING TO BE KNOWN.
        </h3>
        {/* <h3 className="magic-description-desktop">
          WE BELIEVE THAT MAGIC IS NEVER FAR—SOMETIMES, IT JUST NEEDS A GENTLE NUDGE TO RISE BACK TO THE SURFACE. WHETHER YOU’RE SEEKING PERSONAL TRANSFORMATION, A BURST OF CREATIVE ENERGY, OR ANSWERS TO DEEPER QUESTIONS, OUR CREATIVE LAB IS WHERE THAT SOMETHING IS WAITING TO BE KNOWN.
        </h3> */}
      </div>
      <div ref={eventsRef} className="events">
        <h2 className='events-title'>Events</h2>
        <div className="events-horizontal-scroll">
          {eventCardData.map((card, index) => (
            <EventCard
              key={index}
              backgroundImage={card.backgroundImage}
              beforeBackground={card.beforeBackground}
              overlayColor={card.overlayColor}
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
      <div ref={soundsRef} className="sounds">
        <h2 className='sounds-title'>Sounds</h2>
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
      <div className="text">
      <img className="text-animation" src={textAnimation} />
      <img className="text-animation-desktop"src={textAnimationDesktop} />
      </div>
      <div ref={aboutRef} className="closing">
        <img src={logoWhite} />
        <h3 className="quote">
          MASSA CONFUSA IS<br></br>A SPACE FOR<br></br>HOLISTIC EXPLORATION, <br></br>WHERE WE EMBRACE<br></br>THE UNKNOWN<br></br>AS A DRIVING FORCE<br></br>THROUGH<br></br>EXPERIMENTATION,<br></br>OBSERVATION, AND PRACTICE.
        </h3>
        <h3 className="quote-desktop">
          MASSA CONFUSA IS A SPACE FOR HOLISTIC <br></br>EXPLORATION, WHERE WE EMBRACE<br></br>THE UNKNOWNAS A DRIVING FORCE THROUGH<br></br>EXPERIMENTATION,OBSERVATION, AND <br></br>PRACTICE.
        </h3>
      </div>
      <footer>
          <h1 className="footer-title">MASSA<br></br>CONFUSA</h1>        
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
