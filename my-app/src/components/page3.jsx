import { Link } from "react-router-dom";
import React, { useState, useCallback } from "react";
import './page3.css';

export const Page3 = () => {
    const [formData, setFormData] = useState([{
        title: "",
        time: "",
        caption: ""
    }]);

    const [details, setDetails] = useState({
      gender: "",
      age: "",
      cost: "",
      person: ""
    });

    const addElement = () => {
      setFormData([...formData, {
          title: "",
          time: "",
          caption: ""
      }]);
  };



    // handleChange を useCallback でラップ
    const handleChange = useCallback((e, index) => {
        const { name, value } = e.target;
        if (index !== undefined) {
          // formData の場合
        setFormData(prevFormData => 
            prevFormData.map((data, i) => 
                i === index ? { ...data, [name]: value } : data
            )
        );
      } else {
        // details の場合
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
      }
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
                  <div className="Plancategory">
                    {formData.map((data, index) => (
                        <PlanForm formData={data} handleChange={handleChange} index={index} key={index} />
                    ))}

                    <tr>
                      <td colSpan="2">
                          <button className="PlanDetail">
                              <Link to="/Page4"
                                  style={{ textDecoration: 'none', color: 'black', padding: '20px' }}
                              >
                                  内容を編集する
                              </Link>
                          </button>
                          <br />
                          <button className="PlanDateil">予定を削除</button>
                          <br />
                          <button className="PlanDateil" onClick={ addElement }>予定を追加</button>
                      </td>
                    </tr>
                    </div>
                    {/* gender, age, cost, person のみ一度だけ表示 */}
                    <tr>
                      <th><label>人数:</label></th>
                      <td>
                          <input
                              type="text"
                              name="person"
                              value={details.person}
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
                              value={details.gender}
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
                              value={details.age}
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
                              value={details.cost}
                              onChange={(e) => handleChange(e)}
                          />
                      </td>
                  </tr>
                  </tbody>
              </table>
              <button type="submit" className="PlanDateil" id="Savedata">登録</button>
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
            <th><label>タイトル:</label></th>
            <td>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
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

