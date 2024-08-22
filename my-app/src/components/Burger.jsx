import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Burger.css';

class Burger extends React.Component{
    showSetting(event) {
      event.preventDefault();
    }
  
    render () {
      return (
        <div id="outer-container">
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
            <main id="page-wrap">
              <a id="Home" className="menu-item" href="/Home">サイトトップ</a>
              <a id="Page2" className="menu-item" href="/Page2">マイページ</a>
              <a id="Page3" className="menu-item" href="/Page3">プラン作成</a>
              <a id="Page5" className="menu-item" href="/Page5">プラン検索</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="#">Settings</a>
            </main>
          </Menu>
        </div>
      );
    }
  }
  export default Burger;