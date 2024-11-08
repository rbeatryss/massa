import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import CardEvent from './components/bookCard/BookCard';
import whiteCard from "./assets/whiteCard.svg";
import greenCard from "./assets/greenCard.svg";
import yellowCard from "./assets/yellowCard.svg";
import redCard from "./assets/redCard.svg";
import BurgerButton from './components/burgerMenu/burgerButton/BurgerButton';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import SoundCard from './components/soundCard/SoundCard';


function App() {
  const cardData = [
    {
      title: "Dark Side",
      descriptor: "Embrace the unseen",
      description: "Our first stage guides you through the hidden depths of the psyche, where catharsis is the beginning of the transformation journey.",
      buttons: [
        { type: 'event button', eventDate: '10/10', eventTime: '8:00 PM', eventName: 'Tea in Darkness' },
        { type: 'event button', eventDate: '15/10', eventTime: '7:00 PM', eventName: 'Lecture on shadow with Manoj Dias' },
      ],
      backgroundImage: greenCard,
      // gradient: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(83,101,92,1) 35%, rgba(63,62,58,1) 65%, rgba(0,0,0,1) 100%)",
      shadow: `

      0 0 30px rgba(0, 0, 0, 0.3),  
      0 0 50px rgba(0, 0, 0, 0.2),  
      0 0 80px rgba(0, 0, 0, 0.1)
    `,
      // beforeBackground: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(83,101,92,1) 35%, rgba(63,62,58,1) 65%, rgba(0,0,0,1) 100%)",
    },
    {
      title: "Dicovery",
      descriptor: "The Art of Illumination",
      description: "Bridging the conscious and unconscious through self-reflection: we delve into the world of dreams and symbols.",
      buttons: [
        { type: 'coming soon', label: 'NEW CLASSES ARE COMMING SOON' },
      ],
      backgroundImage: whiteCard,
      // gradient: "radial-gradient(circle at 50% 50%, rgba(42, 23, 22, 0.9) 19%, rgba(153, 241, 228, 0.813) 43%, rgba(44, 11, 9, 0.47) 47%, rgba(255, 255, 255, 0) 91%)",
      shadow: `
      0 0 30px rgba(255, 255, 255, 0.3),  
      0 0 50px rgba(255, 255, 255, 0.2),  
      0 0 80px rgba(255, 255, 255, 0.1)
    `,
      // beforeBackground: "rgba(105, 120, 94, 0.1);",
    },
    {
      title: "Learn",
      descriptor: "Conscious Connection",
      description: "Deepening our understanding of relationships and unraveling the artof aware interaction with the world.",
      buttons: [
        { type: 'coming soon', label: 'NEW CLASSES ARE COMMING SOON' },
      ],
      backgroundImage: yellowCard,

      // gradient: "radial-gradient(circle, #F3C81B 0%, #BB9046 35%, #727522 65%, rgba(0,0,0,0.2) 100%)",
      shadow: `
        0 0 30px rgba(0, 0, 0, 0.8),
        0 0 50px rgba	(186, 129, 31, 1),
        0 0 80px rgba(0, 0, 0, 0.3)
    `,
      // beforeBackground: "radial-gradient(circle, rgba(255, 215, 67, 0.8) 0%, rgba(186, 129, 31, 1.5) 20%, rgba(60, 60, 60, 1) 50%, rgba(0, 0, 0, 0) 80%)",
    },
    {
      title: "Growth",
      descriptor: "Fuse Transformation",
      description: "Advanced practices designed for those who have completed the first three stages. This phase invites you to integrate every lesson and embrace the full expression of who you are.",
      buttons: [
        { type: 'coming soon', label: 'INVITE ONLY' },
      ],
      backgroundImage: redCard,

      // gradient: "radial-gradient(circle, #F3C81B 0%, #BB9046 35%, #727522 65%, rgba(0,0,0,0.2) 100%)",
      shadow: `
      0 0 30px rgba(0, 0, 0, 0.3),  
      0 0 50px rgba(0, 0, 0, 0.2),  
      0 0 80px rgba(0, 0, 0, 0.1)
    `,
      // beforeBackground: "radial-gradient(circle, rgba(255, 215, 67, 0.8) 0%, rgba(186, 129, 31, 1.5) 20%, rgba(60, 60, 60, 1) 50%, rgba(0, 0, 0, 0) 80%)",
    },
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
          {cardData.map((card, index) => (
            <CardEvent
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
      </div>
      <div ref={soundsRef} className="sound">
        <h2 className='sound-title'>Sound</h2>
        < SoundCard />
      </div>
      <div ref={communityRef} className="community">
        <h2 className='community-title'>Community</h2>
      </div>
      <div className="text">
        <h3 className="text-animation">
          {/* FROM MEDITATIVE JOURNEYS TO PHILOSOPHICAL DEEP-DIVES, AND IMMERSIVE SOUNDSCAPES THAT GUIDE YOUR INTROSPECTION, WE CURATE EXPERIENCES DESIGNED TO EXPAND YOUR PERCEPTION AND CONSCIOUSNESS. */}
        </h3>
      </div>
    </div>
  );
}

export default App;
