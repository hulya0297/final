import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./accordionItem.scss";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-item-title" onClick={toggleAccordion}>
        <h5>{title}</h5>
        <IoMdArrowDropdown />
      </div>
      {isOpen && <div className="accordion-item-content">{content}</div>}
    </div>
  );
}

export default AccordionItem;
