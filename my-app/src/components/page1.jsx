import { Link } from "react-router-dom";

import React from "react";
export const Page1 = () => {
    return (
        <div>
            <h1>ログイン画面です</h1>
            <button>新規登録</button>
            <br />
            <button>ログイン</button>
            <br />
            <Link to="/Home">サイトトップに戻る</Link>
        </div>
    );
};