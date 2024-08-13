import { Link } from "react-router-dom";

export const Page2 = () => {
    return (
        <div>
            <h1>ここはマイページです</h1>
            <Link to="/Page3">プラン詳細を見る</Link>
            <br />
            <Link to="/Page4">みんなのプランを見てみる</Link>
        </div>
    );
};