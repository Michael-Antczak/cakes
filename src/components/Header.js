import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer">
            <Link to="/">
                <h1>
                    <span className="bold">CAKE</span>
                    <span className="thin">LOVE</span>
                </h1>
            </Link>
            <Link to="/add-cake">
                <h1>
                    <span className="bold">+</span>
                </h1>
            </Link>
        </div>
    )
}

export default Header; 