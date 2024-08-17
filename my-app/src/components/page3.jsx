import { Link } from "react-router-dom";
import React from "react";
import './page3.css';
import { useState } from "react";

export const Page3 = () => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        caption: "",
        gender: "",
        age: "",
        cost: "",
    })

    const handleChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value }); 
    };

    function Savedata() {
        alert("登録されました！")
    }

    return (
        <div className="Container">
            <div className="PlanExsample">
                <h1>プラン</h1>
                <form onSubmit={Savedata}>
                    <div>
                    <label>プラン名:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>日付:</label>
                    <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>スケジュール内容:</label>
                    <input
                        type="text"
                        name="caption"
                        value={formData.caption}
                        onChange={handleChange}
                    />
                    </div>
                    <br />
                    <div>
                    <label>性別:</label>
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>年齢:</label>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>大まかな予算:</label>
                    <input
                        type="text"
                        name="cost"
                        value={formData.cost}
                        onChange={handleChange}
                    />
                    </div>
                    <button type="submit">登録</button>
                </form>
                <button className="PlanDateil"><Link to="/Page4" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>スケジュールを編集する</Link></button>
                <br />
                <button className="PlanDateil"><Link to="/Page2" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>マイページに戻る</Link></button>
            </div>
        </div>
    );
};