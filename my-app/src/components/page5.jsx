import { Link } from "react-router-dom";
import React from "react";
import './page5.css';

export const Page5 = () => {
    return (
        <div className="Container">
            <h1>みんなのプランが一覧になってる＝マイページ一覧と構成は同じ</h1>
            <p>マイページの構成に絞り込みの検索機能を追加した状態</p>
            <button className="PlanDateil"><Link to="/Page5" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>検索</Link></button>
        </div>
    );
};