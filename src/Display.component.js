import React from 'react';
import './Display.css';
import PropTypes from 'prop-types';

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

DisplayValue.propTypes = {
  value: PropTypes.number,
  valueUsed: PropTypes.number
}

export default DisplayValue;
