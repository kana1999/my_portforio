import { Link } from "react-router-dom";
import { useForm, useFieldArray } from 'react-hook-form';
import React, { useEffect } from "react";
import './page3.css';

export const Page3 = () => {
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      formData: [{
        day: 1,  // 各日を識別するためのフィールド
        details: [{  // この配列で複数の予定を管理
          title: "",
          time: "",
          caption: "",
          summary: ""
        }]
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

  // 可読性向上のため、変数名を定義
  // const { fields, append, remove } = useFieldArray({
  const { fields: dayFields, append: appendDay, remove: removeDay } = useFieldArray({
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
                <div className="Plan-details">
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
                      placeholder="例：節約プラン"
                      {...register(`details.PlanName`)}
                    />
                  </div>
                  {/* gender, age, cost, person のみ一度だけ表示 */}
                  
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
                    {dayFields.map((dayField, dayIndex) => (
                      <div key={dayField.id} className="PlanCategory">
                        <div className="DayandRemove">
                          <p className="Day-count">{ dayIndex + 1 }日目</p>
                          <div>
                            <label>概要:</label>
                              <input
                                  type="text"
                                  {...register(`formData.${dayIndex}.summary`)}
                              />
                          </div>
                          <button type="button" className="removeButton" onClick={() => removeDay(dayIndex)}></button>
                        </div>

                        {/* 各日の予定（details）の管理用のコンポーネント追加 */}
                        <DetailsForm
                          dayIndex={dayIndex}
                          register={register}
                          control={control}
                        />

                        <button type="button" className="PlanDetail" onClick={() => appendDay({ day: dayIndex + 2, details: [{ title: "", time: "", caption: "" }] })}>
                          日付を追加
                        </button>
                      </div>
                    ))}

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
                  {watchedFormData.map((dayField, dayIndex) => (
                      <div key={dayField.id}>
                        <p className="Preview-Day-count">{ dayIndex + 1 }日目</p>
                        <label>概要: {watchedFormData[dayIndex].summary}</label>
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

const DetailsForm = ({ dayIndex, register, control }) => {
  const { fields: detailFields, append: appendDetail, remove: removeDetail } = useFieldArray({
    name: `formData.${dayIndex}.details`,
    control
  });

  return (
    <div>
      {detailFields.map((detailField, detailIndex) => (
        <div key={detailField.id}>
          <div className="FormWrapper">
            <input type="text" placeholder="時間を選択" {...register(`formData.${dayIndex}.details.${detailIndex}.time`)} />
          </div>
          <div className="FormWrapper">
            <input type="text" placeholder="予定を記入" {...register(`formData.${dayIndex}.details.${detailIndex}.title`)} />
          </div>
          <div>
            {/* <label>内容:</label> */}
            {/* <textarea {...register(`formData.${dayIndex}.details.${detailIndex}.caption`)} /> */}
          </div>
          <button className="PlanDetail" type="button" onClick={() => removeDetail(detailIndex)}>予定を削除</button>
        </div>
      ))}
      <button className="PlanDetail" type="button" onClick={() => appendDetail({ title: "", time: "", caption: "" })}>
        予定を追加
      </button>
    </div>
  );
};