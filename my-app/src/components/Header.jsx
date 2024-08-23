import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import Burger from "./Burger.jsx";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="logo">
                Travel Guide
                </Link>
                <nav>
                    <Burger />
                    {/*<ul className="nav-links">
                        <li>
                        <Link to="/Home">サイトトップ</Link>
                        </li>
                        <li>
                        <Link to="/Page2">マイページ</Link>
                        </li>
                        <li>
                        <Link to="/Page5">検索</Link>
                        </li>
                        <li>
                        <Link to="#">メニュー</Link>
                        </li>
                    </ul>*/}
                </nav>
            </header>
            );
    };
}

export default Header;