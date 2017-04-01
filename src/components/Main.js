/**
 * Created by jwdn on 2017/3/4.
 */
import React, { Component } from 'react';


export default class Main extends Component {
  render() {
    return (
        <div>
          <div>
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header show">
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">My blog</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="/">Introduce</a>
                    {/*<a className="mdl-navigation__link" href="/articlelist">ArticleList</a>*/}
                    <a className="mdl-navigation__link" href="/about">About</a>
                  </nav>
                </div>
              </header>
            </div>
            <div className="loggen">
              <p>
                Give me a chance and expect what happen next!
              </p>
            </div>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--8-col mdl-cell--2-offset">
                    {this.props.children}
                </div>
              </div>
            </div>
          </main>
        </div>
    );
  }
}