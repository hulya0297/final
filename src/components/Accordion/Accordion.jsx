import "./accordion.scss";
import { accordion } from "../../utils/content";
import AccordionItem from "../AccordionItem/AccordionItem";

function Accordion() {
  return (
    <div className="accordion">
      {accordion.map(({ title, content }) => (
        <AccordionItem key={title} title={title} content={content} />
      ))}
    </div>
  );
}

export default Accordion;
