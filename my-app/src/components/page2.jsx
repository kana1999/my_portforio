import { Link } from "react-router-dom";
import React from "react";
import './page2.css';

export const Page2 = () => {
    return (
        <div className="MypageContainer">
            <h1>マイページ</h1>
            <button><Link to="/Page3" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>プラン詳細を見る</Link></button>
            <br />
            <button><Link to="/Page4" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>みんなのプランを見てみる</Link></button>
        </div>
    );
};