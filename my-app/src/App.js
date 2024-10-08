import React from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Burger from './components/Burger';
//import Footer from "./components/Footer";//
import  Home  from "./components/Home";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";
import { Page3 } from "./components/page3";
import { Page4 } from "./components/page4";
import { Page5 } from "./components/page5";



class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Burger />

          {/*<Burger />
          
          <Footer />
          */}
            <div className='App-body'>
              {/*<Link to="/Home">説明</Link>
              <br />
              <Link to="/Page1">新規登録・ログイン</Link>
              <br />
              <Link to="/Page2">マイページ</Link>
              <br />
              <Link to="/Page3">マイプラン</Link>
              <br />
              <Link to="/Page4">プラン作成</Link>
              <br />
              <Link to="/Page5">みんなのプラン</Link>
              <br />*/}

              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Page1" element={<Page1 />} />
                <Route path="/Page2" element={<Page2 />} />
                <Route path="/Page3" element={<Page3 />} />
                <Route path="/Page4" element={<Page4 />} />
                <Route path="/Page5" element={<Page5 />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
