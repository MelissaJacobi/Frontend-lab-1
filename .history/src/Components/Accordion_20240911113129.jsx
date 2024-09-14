import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: 'A Head Full of Dreams',
      content: ['A Head Full of Dreams', 'Birds', 'Hymn For the Weekend', 'Everglow', 'Adventure of a Lifetime', 'Fun', 'keleidoscope', 'Army of One', 'Amazing day', 'Color Spectrum', 'Up&Up', 'Something just like this'],
    },
    {
      title: 'Live from Climate Pedge Arena',
      content: ['Viva la Vida', 'Human Heart', 'People of Pride', 'Fix you'],
    },
    {
      title: 'Music of the Spheres',
      content: ['Music of the Spheres', 'Higher power', 'Humankind', 'Alien Choir', 'Let somebody go', 'Biutyful', 'my universe', 'infinity sign', 'Coloratura', 'higher power', 'My Universe'],
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
