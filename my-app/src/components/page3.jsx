import { Link } from "react-router-dom";
import React, { useState, useCallback } from "react";
import './page3.css';

export const Page3 = () => {
    const [formData, setFormData] = useState([{
        name: "",
        date: "",
        time: "",
        caption: "",
        gender: "",
        age: "",
        cost: "",
        person: ""
    }]);

    const addElement = () => {
    
      setFormData([...formData, {
          name: "",
          date: "",
          time: "",
          caption: "",
          gender: "",
          age: "",
          cost: "",
          person: ""
      }]);
  };



    // handleChange を useCallback でラップ
    const handleChange = useCallback((e, index) => {
        const { name, value } = e.target;
        
        setFormData(prevFormData => 
            prevFormData.map((data, i) => 
                i === index ? { ...data, [name]: value } : data
            )
        );
    }, []);

    function Savedata() {
        alert("登録されました！");
    }

    return (
        <div className="Container" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <div className="PlanExsample">
                <h1>プラン</h1>
                <table>
                  <tbody>
                    {formData.map((data, index) => (
                        <PlanForm formData={data} handleChange={handleChange} index={index} key={index} />
                    ))}

                    <tr>
                      <td colSpan="2">
                          <button className="PlanDetail">
                              <Link
                                  to="/Page4"
                                  style={{ textDecoration: 'none', color: 'black', padding: '20px' }}
                              >
                                  予定を編集する
                              </Link>
                          </button>
                          <br />
                          <button className="deleteFieldBtn">予定を削除</button>
                          <br />
                          <button className="addFieldBtn" onClick={ addElement }>予定を追加</button>
                      </td>
                    </tr>
                    <tr>
                      <th><label>人数:</label></th>
                      <td>
                          <input
                              type="text"
                              name="person"
                              value={formData.person}
                              onChange={(e) => handleChange(e)}
                          />
                      </td>
                  </tr>
                  <tr>
                      <th><label>性別:</label></th>
                      <td>
                          <input
                              type="text"
                              name="gender"
                              value={formData.gender}
                              onChange={(e) => handleChange(e)}
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
                              onChange={(e) => handleChange(e)}
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
                              onChange={(e) => handleChange(e)}
                          />
                      </td>
                  </tr>

                  </tbody>
                </table>
                    <button type="submit">登録</button>
                <br />
                <button className="PlanDateil" id="Backpage">
                    <Link to="/Page2" style={{ textDecoration: 'none', color: 'black', padding: '20px' }}>マイページに戻る</Link>
                </button>
            </div>
        </div>
    );
};

// PlanForm コンポーネントの定義
const PlanForm = ({ formData, handleChange, index }) => {
  // 新しい要素を追加する関数

  return (
      <>
        <tr>
            <th><label>プラン名:</label></th>
            <td>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e, index)}
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
                    onChange={(e) => handleChange(e, index)}
                />
            </td>
        </tr>
        <tr>
            <th><label>時間:</label></th>
            <td>
                <input
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={(e) => handleChange(e, index)}
                />
            </td>
        </tr>
        <tr>
            <th><label>スケジュール内容:</label></th>
            <td>
                <input
                    type="text"
                    name="caption"
                    value={formData.caption}
                    onChange={(e) => handleChange(e, index)}
                />
            </td>
        </tr>
      </>
  );
};

