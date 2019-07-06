import React from 'react';
import './Display.css';


const DisplayValue = ({value, valueUsed}) => {
  return (
    valueUsed ? 
    <div>
      {value}:
      {valueUsed},
      <div id={`rp${value}`} className="size"/>
    </div> : null
  );
}

export default DisplayValue;
