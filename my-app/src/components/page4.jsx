import { useState } from "react";
import { Link } from "react-router-dom";

export const Page4 = () => {
    const [number, setNumber] = useState()
    const [formData, setFormData] = useState({
        title: "",
        time: "", 
        site: "",
        location: "",
        memo:""
    })
    const handleChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value }); 
    };
    
    function Savedata() {
        alert("登録されました！")
    }
    return (
        <body>
            <div className="Container" style={{paddingLeft:'0px', paddingRight:'0px'}}>
            <h1>スケジュールを作成/編集</h1>
            <form onSubmit={Savedata}>
                    <div>
                    <label>スケジュール名:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>時間:</label>
                    <input
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>行き先のサイトURL:</label>
                    <input
                        type="text"
                        name="site"
                        value={formData.site}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>行き先所在地:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <label>メモ</label>
                    <textarea 
                        type="text"
                        name="memo"
                        value={formData.memo}
                        onChange={handleChange}
                        >
                    </textarea>
                    </div>
                <button type="submit">登録</button>
            </form>
            <button className="PlanDateil"><Link to="/Page3" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>前のページに戻る</Link></button>
                <h1>プランを作成しよう</h1>
                {/*<button className="PlanDateil"><Link to="/Page4" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>編集</Link></button>*/}
                <input id="PlanName1" type="text" placeholder="プラン名"/>
                <h2>URL</h2>
                    <div id="schedule-box" className="form-summary">
                        <div className="card-header">
                            <input type="text" placeholder="お店等のサイトのURL" />
                        </div>
                    </div>
                <h2>MAP</h2>
                    <div id="schedule-box" className="form-summary">
                        <div className="card-header">
                            <input type="text" placeholder="所在地" />
                        </div>
                    </div>
                <h2>メモ</h2>
                    <div id="schedule-box" className="form-summary">
                        <div className="card-header">
                            <textarea type="text"></textarea>
                        </div>
                    </div>
            </div>
            <button onClick={Savedata}>登録</button> 
        </body>
    );
};