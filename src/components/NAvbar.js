import React, {useState } from 'react'
import Logo from '../assets/pizzaLogo.jpg'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';


function NAvbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNAvbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="navbar"> 
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={toggleNAvbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default NAvbar