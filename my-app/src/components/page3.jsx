import { Link } from "react-router-dom";

export const Page3 = () => {
    return (
        <div>
            <h1>プラン1の詳細ページです</h1>
            <Link to="/Page3">編集する</Link>
            <br />
            <Link to="/Page2">マイページに戻る</Link>
        </div>
    );
};