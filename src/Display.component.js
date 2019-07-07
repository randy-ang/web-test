import React from 'react';
import './Display.css';


const DisplayValue = ({value, valueUsed}) => {
  return (
    valueUsed ? 
    <div className="moneyContainer">
      <p className="text">{`Amount: ${valueUsed}`}</p>
      <div id={`rp${value}`} className="size"/>
      <p className="text">{`Rp. ${value}`}</p>
    </div> : null
  );
}

export default DisplayValue;
