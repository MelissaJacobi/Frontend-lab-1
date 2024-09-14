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
      title: 'Accordion 1',
      content: ['Item 1.1', 'Item 1.2', 'Item 1.3'],
    },
    {
      title: 'Accordion 2',
      content: ['Item 2.1', 'Item 2.2', 'Item 2.3'],
    },
    {
      title: 'Accordion 3',
      content: ['Item 3.1', 'Item 3.2', 'Item 3.3'],
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
