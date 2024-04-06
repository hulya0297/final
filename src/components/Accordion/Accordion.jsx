import  { useState } from 'react';
import './accordion.scss'; 
import { IoMdArrowDropdown } from "react-icons/io";

const Accordion = ({ title, content,  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordionitem">
      <div className="accordionitem_title" onClick={toggleAccordion}>
        <h5>{title}</h5>
        <IoMdArrowDropdown />
      </div>
      {isOpen && <div className="accordionitem_content">{content}</div>}
    </div>
  );
};

export default Accordion;