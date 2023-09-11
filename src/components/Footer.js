import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'; // Correct the import
import TwitterIcon from '@mui/icons-material/Twitter'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import LinkedIncon from '@mui/icons-material/LinkedIn'; 

import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedIncon />
            </div>
            <p> &copy; 2023 fontainsoulfood.com</p>
        </div>
    );
}

export default Footer