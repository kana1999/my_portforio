import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
        return (
            <footer className='footer'>
                        <p>Have a nice day!</p>
                    <ul className='footer-list'>
                        <li><a href="#">お問い合わせ</a></li>
                        <li><a href="#">利用規約</a></li>
                        <li><a href="#">プライバシーポリシー</a></li>
                        <li><a href="#">会社概要</a></li>
                    </ul>
            </footer>
        );
    };

export default Footer;