import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Burger.css';

class Burger extends React.Component{
    //showSetting(event) {
      //event.preventDefault();
    //}

  
    render () {
      return (
        <div id="outer-container">
          {/*<Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right width={ 200 } className='bm-position' >*/}
            <main id="page-wrap">
            <Menu right>
              <a id="Home" className="menu-item" href="/Home">サイトトップ</a>
              <a id="Page2" className="menu-item" href="/Page2">マイページ</a>
              <a id="Page3" className="menu-item" href="/Page3">プラン作成</a>
              <a id="Page5" className="menu-item" href="/Page5">プラン検索</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="#">Settings</a>
              </Menu>

                {/*<nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <div className="collapse navbar-collapse">
                                <a id="Home" className="menu-item" href="/Home">サイトトップ</a>
                                <a id="Page2" className="menu-item" href="/Page2">マイページ</a>
                                <a id="Page3" className="menu-item" href="/Page3">プラン作成</a>
                                <a id="Page5" className="menu-item" href="/Page5">プラン検索</a>
                                <a onClick={ this.showSettings } className="menu-item--small" href="#">Settings</a>
                            </div>
                        </div>
                    </div>
                </nav> */}   
            </main>
          {/*</Menu>*/}
        </div>
      );
    }
  }
  export default Burger;