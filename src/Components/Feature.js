import React from 'react';

const Feature = props => {
  return (
    <li className="feature__item">
      <div className={props.featureClass} onClick={props.onClick}>
        {props.itemName}(
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.itemCost)}
        )
      </div>
    </li>
  );
};

export default Feature;
