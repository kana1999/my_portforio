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

  window.addEventListener('load', () => {
    const tabs = document.querySelectorAll('.checkBtn');
  
    // タブ切り替えのイベントリスナー
    tabs.forEach(tab => {
      tab.addEventListener('change', (e) => {
        console.log(`${e.target.id} が選択されました`);
  
        // ここで追加の処理を記述
        if (e.target.id === 'hoge2') {
          console.log('hoge2タブがアクティブになりました！');
        }
      });
    });
  });


    return (
        <div className="Container">

          {/* タブの内容 */}
          <div id="tab-container">
          {/* ラジオボタン  */}
            <input type="radio" id="hoge1" name="tab" checked/>
            <label for="hoge1">{watchedDetails.PlanName}</label>

            <input type="radio" id="hoge2" name="tab"/>
            <label className="hoge2" for="hoge2">hoge2タブ見出し</label>

            {/* タブ内容  */}
            <div id="left-container">{watchedDetails.PlanName}の内容</div>
            <div id="right-container">hoge2タブ内容</div>
          </div>


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

                    <div className="appendbutton">
                      <button type="button" className="PlanDetail" onClick={() => appendDay({ details: [{ title: "", time: "", caption: "" }] })}>
                          日付を追加
                      </button>
                    </div>
                </div>
              </div>

              <div className="Plan-preview">
                <div className="checkelement">
                  <h2>プレビュー</h2>
                    <button className="PlanDetail" type="button">確認に進む</button>
                    {/*<button className="PlanDetail" type="submit" id="Savedata">登録</button>
                   <button className="PlanDetail" id="Backpage">
                          <Link to="/Page2"  
                            style={{ textDecoration: 'none', color: 'black', padding: '20px' }}>
                            マイページに戻る
                          </Link>  
                  </button> */}
                </div>
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

  // 各詳細項目ごとのポップアップを追跡するためのState
  const [popupIndex, setPopupIndex] = useState(null);
  const [detailInputs, setDetailInputs] = useState({});

  const openPopup = (index) => {
    setPopupIndex(index);
  };

  const closePopup = () => {
    setPopupIndex(null);
  };

  const handleDetailInputChange = (index, value) => {
    setDetailInputs({
      ...detailInputs,
      [index]: value,
    });
  };

  const handleTooltipText = (text) => {
    // 文字数制限を設定（15文字まで）
    return text.length > 15 ? text.substring(0, 15) + '...' : text;
  };


  return (
    <div>
      {detailFields.map((detailField, detailIndex) => (
        <div key={detailField.id}>
          <div className="buttonClass">
            <div className="FormWrapper">
              <label className="label2">時間</label>
                <input  
                  id={`appt-time-${detailIndex}`}
                  type="time" 
                  {...register(`formData.${dayIndex}.details.${detailIndex}.time`)}/>
            </div>
            <div className="FormWrapper">
              <label className="label2">予定</label>
              <input className="exSentence" type="text" placeholder="例：清水寺行く" {...register(`formData.${dayIndex}.details.${detailIndex}.title`)} />
            </div>
                {/* ポップアップを開くための詳細ボタン */}
                <button className="buttonDetail" type="button" 
                        id="c-tooltip" data-tooltip={handleTooltipText(detailInputs[detailIndex] || '詳細内容が表示されます')} 
                        onClick={() => openPopup(detailIndex)}>詳細
                </button>
                {/* 削除ボタン */}
                <button className="buttonDetail" id="removeoption" type="button" onClick={() => removeDetail(detailIndex)}>
                    <img className="buttonDetailImage" src="https://loosedrawing.com/assets/illustrations/png/ic034.png" alt="削除"/>
                </button> 
          </div>
                {/* 各詳細のポップアップダイアログ */}
                {popupIndex === detailIndex && (
                  <div className="popup-overlay">
                    <div className="popup-window">
                      <span className="close" onClick={closePopup}>
                        &times;
                      </span>
                      <h3>詳細情報を入力</h3>
                      <textarea
                        className="popuptextarea"
                        placeholder="例：◯◯ホテルにチェックイン、荷物置く"
                        value={detailInputs[detailIndex] || ''}
                        onChange={(e) => handleDetailInputChange(detailIndex, e.target.value)}
                      />
                      <button type="button" className="keepbutton" onClick={closePopup}>
                        保存
                      </button>
                    </div>
                  </div>
                )}
        </div>
      ))}
      <div className="appendbutton">
        <button className="PlanDetail" type="button" onClick={() => appendDetail({ title: "", time: "", caption: "" })}>
          予定を追加
        </button>
      </div>
    </div>
  );
};