import { Link } from "react-router-dom";

export const Page4 = () => {
    return (
        <div className="Container">
            <h1>プラン例の編集画面です</h1>
            <button className="PlanDateil"><Link to="/Page4" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>編集</Link></button>
        </div>
    );
};