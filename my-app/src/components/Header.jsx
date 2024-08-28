import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import Burger from "./Burger.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="#" className="logo">
                Travel Guide
                </Link>
                <nav className="navber d-none d-lg-block">
                    
                    <ul className="nav-links">
                        <li>
                        <Link to="/Home">サイトトップ</Link>
                        </li>
                        <li>
                        <Link to="/Page2">マイページ</Link>
                        </li>
                        <li>
                        <Link to="/Page3">プラン作成</Link>
                        </li>
                        <li>
                        <Link to="/Page5">検索</Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>
            );
    };
}

export default Header;