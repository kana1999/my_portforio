import { Link } from "react-router-dom";

import React from "react";
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
                        <input
                        type="submit"
                        value="ログイン"
                        />
                    </form>
                </div>
                <Link to="/Home">サイトトップに戻る</Link>
            </div>
        );
}