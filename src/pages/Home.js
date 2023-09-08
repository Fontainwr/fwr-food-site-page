import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/backgroundsoul.jpg'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Fontain's Soul Food Restaurant</h1>
                <br>
                </br>
                <p>Food for your soul!</p>
                <Link to="/menu"> 
                    <button> Place Order </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;