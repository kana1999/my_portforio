import { Link } from "react-router-dom";
import { useForm, useFieldArray } from 'react-hook-form';
import React, { useEffect } from "react";
import { useState } from 'react';
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
                          className="exSentence"
                          type="text"
                          placeholder="例：京都旅行"
                        />
                      </div>
                      <div>
                        <label className="label1">プラン名：</label>
                        <input
                          className="exSentence"
                          type="text"
                          placeholder="例：節約プラン"
                          {...register(`details.PlanName`)}
                        />
                      </div>
                  {/* gender, age, cost, person のみ一度だけ表示 */}
                  {/* 以下はアコーディオン仕様 */}
                        <Accordion register={register} />
                  </div>
                  {/* 以下は枠付きの1日単位の予定 */}
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
              <input type="checkbox" id="popup" />
                <label class="popup-open" for="popup">ポップアップを表示する</label>
                  <div class="popup-overlay">
                      <div class="popup-window">
                          <p class="popup-text">詳細を記入できます</p>
                            <textarea placeholder="◯◯ホテルに荷物置く"></textarea>
                              <label class="popup-close" for="popup">
                                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                  <line x1="0" y1="0" x2="18" y2="18" stroke="white" stroke-width="3"></line>
                                  <line x1="0" y1="18" x2="18" y2="0" stroke="white" stroke-width="3"></line>
                                </svg>
                              </label>
                      </div>
                  </div>
          </div>
    );
};

const Accordion = ({register}) => {
  // アコーディオンの開閉状態を管理するステート
  const [isOpenAccordion, setIsOpenAccordion] = useState(true);

  // アコーディオンの開閉を切り替える関数
  const toggleAccordion = () => {
    setIsOpenAccordion(!isOpenAccordion);
  };


  return (
    <div className="option">
      {/* summaryをクリックしてアコーディオンを開閉 */}
      <summary 
        onClick={toggleAccordion}
        className={isOpenAccordion ? "summary-not-clicked" : "summary-clicked"}>
          <span className="icon"></span>
        クリックして{isOpenAccordion ? "閉じる" : "開く"} 
      </summary>
      {/* アコーディオンのコンテンツ部分 */}
      {isOpenAccordion && (
        <div className="accordion-content">
          <div>
            <label className="label1">旅行期間:</label>
            <input
              className="exSentence"
              type="text"
              placeholder="例:20◯◯/△△/××〜△△/□□"
              {...register(`details.itinerary`)}
            />
          </div>
          <div>
            <label className="label1">人数:</label>
            <input
              className="exSentence"
              type="text"
              placeholder="例:3"
              {...register(`details.person`)}
            />
          </div>
          <div>
            <label className="label1">性別:</label>
            <select className="exSentence" {...register(`details.gender`)}>
              <option value="choice">選択してください</option>
              <option value="man">男性</option>
              <option value="woman">女性</option>
            </select>
          </div>
          <div>
            <label className="label1">年齢:</label>
            <input
              className="exSentence"
              type="text"
              placeholder="例:25"
              {...register(`details.age`)}
            />
          </div>
          <div>
            <label className="label1">予算:</label>
            <input
              className="exSentence"
              type="text"
              placeholder="例:20,000"
              {...register(`details.cost`)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;


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
                <label  
                  for="appt-time" 
                  {...register(`formData.${dayIndex}.details.${detailIndex}.time`)}>
                </label>
                <input id="appt-time" type="time" name="appt-time" step="60" />
            </div>
            <div className="FormWrapper">
              <label className="label2">予定</label>
              <input className="exSentence" type="text" placeholder="例：清水寺行く" {...register(`formData.${dayIndex}.details.${detailIndex}.title`)} />
            </div>

            <div class="button-container">
                <label class="button-sample1" for="popupFlag1">詳細</label>
              </div>
              <input type="checkbox" class="popup-flag" id="popupFlag1" />
                <label class="popup-background" for="popupFlag1"></label>
                  <div class="popup">
                    <label class="close-button" for="popupFlag1">×</label>
                    <div class="content">
                        <h5>詳細記入できます</h5>
                        <textarea placeholder="◯◯ホテルに荷物置く"></textarea>
                    </div>
                </div>

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