import { Link } from "react-router-dom";
import React from "react";
import './page3.css';

export const Page3 = () => {
    return (
        <div className="Container">
            <h1>プラン1のスケジュールが見れます</h1>
            <button className="PlanDateil"><Link to="/Page4" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>このプランを編集する</Link></button>
            <br />
            <button className="PlanDateil"><Link to="/Page2" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>マイページに戻る</Link></button>
        </div>
    );
};