import React from 'react'
import Logo from '../assets/pizzaLogo.jpg'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function NAvbar() {
    return (
        <div className="navbar"> 
            <div className="leftSide">
                <img src={Logo} />
            </div>
            <div className="rightSide"></div>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
        </div>
    );
}

export default NAvbar