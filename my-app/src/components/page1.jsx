import { Link } from "react-router-dom";
import React from "react";
import './page1.css';

export const Page1 = () => {
        return (
            <div>
                <div className="contact-form">
                    <form>
                        <p>メールアドレス</p>
                        <input />
                        <p>パスワード</p>
                        <input />
                        <br />
                        <button><Link to="/Page2" style={{textDecoration: 'none', color: 'black', padding: '20px'}}>ログイン</Link></button>
                    </form>
                        <button><Link to="/Home" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>サイトトップに戻る</Link></button>
                </div>
            </div>
        );
}