import  { useState } from 'react';
import "./slider.scss"

function Slider() {
  const [value, setValue] = useState(0); 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='slider'>
      <input 
        type="range"
        min="0"
        max="75"
        value={value}
        onChange={handleChange}
        className='slider_input'
      />
      <span className='slider_price'>Price: ${value}</span>
    </div>
  );
}

export default Slider;
