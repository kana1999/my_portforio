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
          Summary: ""
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
                        <label className="label1">旅行名：</label>
                        <input
                          type="text"
                          placeholder="例：京都旅行"
                        />
                      </div>
                      <div>
                        <label className="label1">プラン名：</label>
                        <input
                          type="text"
                          placeholder="例：節約プラン"
                          {...register(`details.PlanName`)}
                        />
                      </div>
                  {/* gender, age, cost, person のみ一度だけ表示 */}
                  {/* 以下はアコーディオン仕様 */}
                    <details open>
                        <summary>クリックして閉じる</summary>
                          <div className="accordionContent">
                            <div>
                                <label className="label1">旅行期間:</label>
                                <input
                                    type="text"
                                    {...register(`details.itinerary`)}
                                />
                            </div>
                            <div>
                                <label className="label1">人数:</label>
                                <input
                                    type="text"
                                    {...register(`details.person`)}
                                />
                            </div>
                            <div>
                              <label className="label1">性別:</label>
                                <select {...register(`details.gender`)}>
                                    <option value="choice">選択してください</option>
                                    <option value="man">男性</option>
                                    <option value="woman">女性</option>
                                </select>
                            </div>
                            <div>
                                <label className="label1">年齢:</label>
                                <input
                                    type="text"
                                    {...register(`details.age`)}
                                />
                            </div>
                            <div>
                                <label className="label1">予算:</label>
                                <input
                                    type="text"
                                    {...register(`details.cost`)}
                                />
                            </div>
                          </div>
                    </details>
                  </div>
                  <div>
                    {dayFields.map((dayField, dayIndex) => (
                      <div key={dayField.id} className="PlanCategory">
                        <div className="DayandRemove">
                          <p className="Day-count">{ dayIndex + 1 }日目</p>
                          <div>
                            <label className="label2">概要:</label>
                              <input
                                  className="exSentence"
                                  type="text"
                                  placeholder="例：寺院巡り"
                                  {...register(`formData.${dayIndex}.Summary`)}
                              />
                          </div>
                          {/* 以下は1日単位の枠ごと削除する×表示のボタン */}
                          <button type="button" className="removeButton" onClick={() => removeDay(dayIndex)}></button>
                        </div>

                        {/* 各日の予定（details）の管理用のコンポーネント追加 */}
                        <DetailsForm
                          dayIndex={dayIndex}
                          register={register}
                          control={control}
                        />

                        
                      </div>
                    ))}

                    <button type="button" className="PlanDetail" onClick={() => appendDay({ details: [{ title: "", time: "", caption: "" }] })}>
                          日付を追加
                        </button>

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
                        <label>概要: {watchedFormData[dayIndex].Summary}</label>
                      </div>
                    ))}
              </div>
            </div>
          </form>
              <button className="PlanDetail" type="button">確認に進む</button>
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
          <div className="buttonClass">
            <div className="FormWrapper">
              <label className="label2">時間</label>
                <select className="label2-option" {...register(`formData.${dayIndex}.details.${detailIndex}.time`)}>
                              <option value="choice">選択してください</option>
                              <option value="7:00">7:00</option>
                              <option value="8:00">8:00</option>
                              <option value="9:00">9:00</option>
                              <option value="10:00">10:00</option>
                              <option value="11:00">11:00</option>
                              <option value="12:00">12:00</option>
                              <option value="13:00">13:00</option>
                              <option value="14:00">14:00</option>
                              <option value="15:00">15:00</option>
                              <option value="16:00">16:00</option>
                              <option value="17:00">17:00</option>
                              <option value="18:00">18:00</option>
                              <option value="19:00">19:00</option>
                              <option value="20:00">20:00</option>
                              <option value="21:00">21:00</option>
                              <option value="22:00">22:00</option>
                              <option value="23:00">23:00</option>
                              <option value="24:00">24:00</option>
                          </select>
            </div>
            <div className="FormWrapper">
              <label className="label2">予定</label>
              <input className="exSentence" type="text" placeholder="例：清水寺行く" {...register(`formData.${dayIndex}.details.${detailIndex}.title`)} />
            </div>
              <button className="buttonDetail" type="button">詳細</button>
                {/* <label>内容:</label> */}
                {/* <textarea {...register(`formData.${dayIndex}.details.${detailIndex}.caption`)} /> */}
              <button className="buttonDetail" id="removeoption" type="button" onClick={() => removeDetail(detailIndex)}>
                <img className="buttonDetailImage" src="https://loosedrawing.com/assets/illustrations/png/ic034.png" />
              </button>
          </div>
        </div>
      ))}
      <button className="PlanDetail" type="button" onClick={() => appendDetail({ title: "", time: "", caption: "" })}>
        予定を追加
      </button>
    </div>
  );
};