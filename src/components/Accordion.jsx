import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="w-full px-5 md:px-20 lg:px-40 2xl:px-80">
         {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            icon={item.icon}
            content={item.content}
            links={item.links}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

export default Accordion