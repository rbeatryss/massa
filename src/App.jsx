import React from 'react';
import './App.css';
import CardEvent from './components/cardEvent/CardEvent';

function App() {
  const cardData = [
    {
      title: "Event 1",
      description: "Description for event 1.",
      buttons: ["Join", "Info", "Share"],
      gradient: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(83,101,92,1) 35%, rgba(63,62,58,1) 65%, rgba(0,0,0,1) 100%)",
      shadow: `
      0 0 15px rgba(0, 0, 0, 0.5), 
      0 0 30px rgba(0, 0, 0, 0.5),  
      0 0 50px rgba(0, 0, 0, 0.5), 
      0 0 80px rgba(0, 0, 0, 0.5)
    `,
    
    },
    {
      title: "Event 2",
      description: "Description for event 2.",
      buttons: ["Join", "Info", "Share"],
      gradient: "radial-gradient(circle, rgba(225,205,194,1) 0%, rgba(175,202,222,1) 42%, rgba(238,238,238,1) 100%)",
      shadow: `
      0 0 15px rgba(255, 255, 255, 0.5), 
      0 0 30px rgba(255, 255, 255, 0.3),  
      0 0 50px rgba(255, 255, 255, 0.2),  
      0 0 80px rgba(255, 255, 255, 0.1)
    `,
    },
    {
      title: "Event 3",
      description: "Description for event 3.",
      buttons: ["Join", "Info", "Share"],
      gradient: "radial-gradient(circle, #ffda43 0%, #BA811F 42%, rgba(0,0,0,20) 100%)",
      shadow: `
      0 0 15px rgba(#F3C81B, 0.5), 
      0 0 30px rgba(#F3C81B, 0.3),  
      0 0 50px rgba(#F3C81B, 0.2),  
      0 0 80px rgba(#F3C81B, 0.1)
    `,
    },
  ];

  return (
    <div className="App">
      <header className="header"></header>
      <div className="about">
        <div className="title">
          <h1>MASSA CONFUSA</h1>
        </div>
        <div className="description">
          <h3>Massa Confusa is a Los Angeles based creative laboratory exploring the subtle art of transformation. Here, creative chaos isn’t something to control—it’s a catalyst for discovery.</h3>
        </div>
      </div>
      <div className="explore">
        <div className="horizontal-scroll">
          {cardData.map((card, index) => (
            <CardEvent
              key={index}
              title={card.title}
              description={card.description}
              gradient={card.gradient}
              shadow={card.shadow}
              buttons={card.buttons}
            />
          ))}
        </div>
      </div>
      <div className="magic">
        <h2>Magic Rediscovered.</h2>
        <h3 className="magic-description">
          WE BELIEVE THAT MAGIC IS NEVER FAR—SOMETIMES, IT JUST NEEDS A GENTLE NUDGE TO RISE BACK TO THE SURFACE. WHETHER YOU’RE SEEKING PERSONAL TRANSFORMATION, A BURST OF CREATIVE ENERGY, OR ANSWERS TO DEEPER QUESTIONS, OUR CREATIVE LAB IS WHERE THAT SOMETHING IS WAITING TO BE KNOWN.
        </h3>
      </div>
      <div className="events">
        <h2>Events</h2>
      </div>
      <div className="sound">
        <h2>Sound</h2>
      </div>
      <div className="community">
        <h2>Community</h2>
      </div>
      <div className="text">
        <h3 className="text-animation">
          FROM MEDITATIVE JOURNEYS TO PHILOSOPHICAL DEEP-DIVES, AND IMMERSIVE SOUNDSCAPES THAT GUIDE YOUR INTROSPECTION, WE CURATE EXPERIENCES DESIGNED TO EXPAND YOUR PERCEPTION AND CONSCIOUSNESS.
        </h3>
      </div>
    </div>
  );
}

export default App;
