import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component {
    render() {
     return (
        <section id="PlanExplanation">
            <div className="Container">
                    <div className="Container-header">
                        <h1>旅のしおりで旅行がさらに楽しめる！</h1>
                        <p>旅のしおりの作成と共有ができる〇〇です。無料かつアプリダウンロードも不要！</p>
                        <p>ブラウザがあれば旅行プランが作成可能です。</p>
                        <p>「女子旅」「卒業旅行」「社員旅行」「家族旅行」「一人旅」「修学旅行」の計画を立ててみませんか？</p>
                    </div>
                    <br />
                        <div className="Container-list-parent">
                            <div className="Container-list-detail">
                                <img className="C-li" src="https://loosedrawing.com/assets/illustrations/png/701.png"></img>
                                <h1>旅行プランを手軽に作成</h1>
                                <p>テンプレートが用意されているので作りやすい！</p>
                                <p>他のユーザーが作ったプランも見られるので、参考にできます。</p>
                                <p>他のユーザーのプランは一覧で見るだけでなく、絞り込み検索もできるので目的やイメージに合ったプランを探すことができます。</p>
                            </div>
                    <br />
                            <div className="Container-list-detail">
                                <img className="C-li" src="https://loosedrawing.com/assets/illustrations/png/1180.png"></img>
                                <h1>プランの共有が簡単にできる</h1>
                                <p>プランを作成したら、家族や友だちにURLで共有できます。</p>
                                <p>LINEのトークやノートに貼っておくと便利です。アプリ不要でブラウザがあれば見れるのでSNSでも共有しやすいです。</p>
                                <p>スケジュールにいいね機能も付いているので候補に迷ったら投票して決めることも！</p>
                            </div>
                </div>
                <button className="PlanDateil"><Link to="/Page1" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>新規登録・ログインする</Link></button>
                <br />
                <div className="HowToUse">
                    <h1>使い方は？</h1>
                    <img className="HTU" src="https://loosedrawing.com/assets/illustrations/png/1451.png"></img>
                    <br />
                    <h3>〜旅のしおりを作成〜</h3>
                    <br />
                    <p>旅行プランのスケジュールを作成</p>
                    <p>行く場所や泊まる場所、URL…etcを入力し、「登録」ボタンを押して完成。何度も編集可能なので急なスケジュール変更にも対応できます。</p>
                    <br />
                    <h3>〜旅行仲間に旅のしおりを共有〜</h3>
                    <br />
                    <p>しおりが完成したら旅行仲間にURLで共有</p>
                    <p>LINEのノートに貼ったり、ブックマークしておくとすぐに見れて便利です。アプリをダウンロードする必要がないのでスムーズに確認できます。</p>
                </div>
                <button className="PlanDateil"><Link to="/Page1" style={{textDecoration: 'none' ,color: 'black', padding: '20px'}}>新規登録・ログインする</Link></button>
            </div>
        </section>
    );
  };
}

export default Home;