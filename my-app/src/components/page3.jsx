import { Link } from "react-router-dom";
import { useForm, useFieldArray } from 'react-hook-form';
import React, { useEffect } from "react";
import './page3.css';

export const Page3 = () => {
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      formData: [{ 
        title: "",
        time: "",
        caption: ""
      }],
      details: {
        PlanName: "",
        gender: "",
        age: "",
        cost: "",
        person: "",
        itinerary: ""
      }
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "formData",
    control
  }); 

  // フォームのデータの監視
  const watchedFormData = watch("formData");
  const watchedDetails = watch("details");

  useEffect(() => {
      // フォームデータの変更を監視してコンソールに出力
      console.log("フォームデータが変更されました:", watchedFormData);
      console.log("詳細情報が変更されました:", watchedDetails);
  }, [watchedFormData, watchedDetails]);

  const onSubmit = (data) => {
      alert("登録されました！");
      console.log("送信されたデータ:", data);
  };
  
    return (
        <div className="Container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Plan-Container">
              <div className="PlanExsample">
                  <div>
                    <input
                      type="text"
                      placeholder="旅行名"
                    />
                  </div>
                  <div>
                    <label>プラン名：</label>
                    <input
                      type="text"
                      placeholder="節約プラン"
                      {...register(`details.PlanName`)}
                    />
                  </div>
                  {/* gender, age, cost, person のみ一度だけ表示 */}
                  <div className="Plan-details">
                      <div>
                        <label>旅行期間:</label>
                          <input
                              type="text"
                              {...register(`details.itinerary`)}
                          />
                      </div>
                      <div>
                        <label>人数:</label>
                          <input
                              type="text"
                              {...register(`details.person`)}
                          />
                      </div>
                      <div>
                        <label>性別:</label>
                          <select {...register(`details.gender`)}>
                              <option value="choice">選択してください</option>
                              <option value="man">男性</option>
                              <option value="woman">女性</option>
                          </select>
                      </div>
                      <div>
                        <label>年齢:</label>
                          <input
                              type="text"
                              {...register(`details.age`)}
                          />
                      </div>
                      <div>
                        <label>予算:</label>
                          <input
                              type="text"
                              {...register(`details.cost`)}
                          />
                      </div>
                    </div>
                    <div>
                      {fields.map((field, index) => (
                      <div className="PlanCategory" key={field.id}>
                        <div className="DayandRemove">
                          <p className="Day-count">{ index + 1 }日目</p>
                          <div>
                            <button type="button" className="removeButton" onClick={() => remove( index )}></button>
                          </div>
                        </div>
                        <PlanForm register={register} index={index}/>
                      </div>
                    ))}
                        <div>
                          <button type="button" className="PlanDetail" onClick={() => append({ title: "", time: "", caption: "" })}>日付を追加</button>
                        </div>

                  <button type="submit" className="PlanDetail" id="Savedata">登録</button>
                </div>
              </div>
              <div className="Plan-preview">
                <h2>プレビュー</h2>
                  <ul>
                    <li>プラン名：{watchedDetails.PlanName}</li>
                    <li>旅行期間：{watchedDetails.itinerary}</li>
                    <li>予算：{(`¥${watchedDetails.cost}`)}</li>
                  </ul>
                <br />
                <h3>デイリースケジュール</h3>
                  <p>{watchedFormData.title}</p>
                  {fields.map((field, index) => (
                      <div key={field.id}>
                          <p className="Preview-Day-count">{ index + 1 }日目</p>
                        <label>概要: {watchedFormData[index].title}</label>
                      </div>
                    ))}
              </div>
            </div>
          </form>
          
              <button className="PlanDetail" id="Backpage">
                  <Link to="/Page2" 
                        style={{ textDecoration: 'none', color: 'black', padding: '20px' }}>
                        マイページに戻る
                  </Link>
              </button>
        </div>
    );
};

// PlanForm コンポーネントの定義
const PlanForm = ({ register, index }) => {
  // 新しい要素を追加する関数

  return (
    <div className="FormWrapper">
      <div>
          <label>概要:</label>
            <input
                type="text"
                {...register(`formData.${index}.title`)}
            />
      </div>
      <div>
          <label>時間:</label>
            <input
                type="text"
                {...register(`formData.${index}.time`)}
            />
      </div>
      <div>
          <label>スケジュール内容:</label>
            <textarea
                type="text"
                {...register(`formData.${index}.caption`)}
            />
      </div>
            <button className="PlanDetail">
              <Link to="/Page4"
                    style={{ textDecoration: 'none', color: 'black'}}>
                    内容を編集する
              </Link>
            </button>
    </div>
  );
};

