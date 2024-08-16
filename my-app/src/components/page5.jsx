import { Link } from "react-router-dom";
import React from "react";
import './page5.css';

export const Page5 = () => {
    return (
        <div className="Container">
            <h1>みんなのプランが一覧になってます</h1>
            <button className="PlanDateil"><Link to="/Page5" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>検索</Link></button>
        </div>
    );
};