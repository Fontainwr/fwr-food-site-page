import React from 'react';

function MenuItem({ image, name, price, onAddToBasket }) {
    return (
        <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price} </p>
        <button className="addToBasketButton" onClick={onAddToBasket}>
            Add to Basket
        </button>
        </div>
    );
}

export default MenuItem;
