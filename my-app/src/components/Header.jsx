import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
            Travel Guide
            </Link>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/search">Search</Link>
                    </li>
                    <li>
                    <Link to="/menu">Menu</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;