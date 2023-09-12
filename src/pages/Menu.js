import React, { useState } from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
    const [basket, setBasket] = useState([]);
    
    // Function to handle adding an item to the basket
    const addItemToBasket = (item) => {
        setBasket([...basket, item]);
        alert('Item was placed in the basket successfully!');
    };

    return (
        <div className="menu">
        <h1 className="menuTitle">The Soul Menu!</h1>
        <div className="menuList">
            {MenuList.map((menuItem, key) => {
            return (
                <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                onAddToBasket={() => addItemToBasket(menuItem)} // Pass the function to MenuItem
                />
            );
            })}
        </div>
        </div>
    );
    }

export default Menu;
