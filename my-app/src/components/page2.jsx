import { Link } from "react-router-dom";
import React from "react";
import './page2.css';

export const Page2 = () => {
    return (
        <div className="Container">
            <div className="MypageContainer">
                <h1>マイページ</h1>
                <p>自分のプラン一覧が表示されます</p>
                <button className="PlanDateil"><Link to="/Page3" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>プラン（例）を見る</Link></button>
                <br />
                <button className="PlanDateil"><Link to="/Page5" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>みんなのプランを見る</Link></button>
            </div>
        </div>
    );
};


//以下は試しに書いたコードです//
class Myplan extends React.Component {
    render() {
        return (
            <div className="myplan-item">
                <div className="myplan-name">{this.props.name}</div>
                <img
                 className="myplan-image"
                 src={this.props.image}
                 />

            </div>
        );
    }
}

export default Myplan;
