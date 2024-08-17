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
                {/*<form onSubmit={Savedata}>*/}
                    <div className="forms">
                    <table>
                        <tr>
                            <th><label>プラン名:</label></th>
                                <td>
                                    <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                </td>
                        </tr>
                        <tr>
                            <th><label>日付:</label></th>
                                <td>
                                    <input
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    />
                                </td>
                        </tr>
                        <tr>
                            <th><label>スケジュール内容:</label></th>
                                {/*<div method="POST" action="/">*/}
                                    <td>
                                    <input 
                                    type="text" 
                                    name="caption"
                                    value={formData.caption}
                                    onChange={handleChange}
                                    />
                                    </td>
                                <button className="PlanDateil"><Link to="/Page4" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>スケジュールを編集する</Link></button>
                                <br />
                                <button class="deleteFieldBtn">スケジュールを削除</button>
                                <br />
                                <button class="addFieldBtn">スケジュールを追加</button>
                                {/*</div>*/}
                        {/*<input
                            type="text"
                            name="caption"
                            value={formData.caption}
                            onChange={handleChange}
                        />*/}
                        </tr>
                        <tr>
                            <th><label>性別:</label></th>
                                <td>
                                <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                />
                                </td>
                        </tr>
                        <tr>
                            <th><label>年齢:</label></th>
                                <td>
                                    <input
                                    type="text"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    />
                                </td>
                        </tr>
                        <tr>
                            <th><label>大まかな予算:</label></th>
                               <td>
                                <input
                                type="text"
                                name="cost"
                                value={formData.cost}
                                onChange={handleChange}
                                />
                                </td>
                        </tr>
                    </table>
                    <button type="submit">登録</button>
                    </div>
                {/*</form>*/}
                <br />
                <button className="PlanDateil" id="Backpage"><Link to="/Page2" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>マイページに戻る</Link></button>
            </div>
        </div>
    );
};