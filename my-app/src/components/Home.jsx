import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>ここが説明のページです</h1>
            <p>旅行プランの作成と共有ができる〇〇</p>
            <br />
            <p>このサービスについて</p>
            <br />
            <p>自分で旅行プランを立てるもよし、他人が立てたプランの閲覧や検索も！</p>
            <Link to="/Page1">新規登録・ログインする</Link>
        </div>
    );
};