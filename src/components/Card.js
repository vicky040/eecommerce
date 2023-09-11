import React from 'react';
import '../Pages/Product.css';

const Card = ({ image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="content">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card;
