import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'; // Correct the import

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
            </div>
            <p> &copy; 2023 FontainSoulFood.com</p>
        </div>
    );
}

export default Footer