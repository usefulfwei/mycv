/**
 * Created by jwdn on 2017/3/4.
 */
import React, { Component } from 'react';

export default class About extends Component{
  render(){
    return(
        <div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col">
              <i className="mdi mdi-sunglasses mdi-36px"/>
            </div>
            <div className="mdl-cell mdl-cell--10-col about-text">
              This is a demo built with react, react-route and material design lite
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <i className="mdi mdi-email mdi-36px"/>
            </div>
            <div className="mdl-cell mdl-cell--10-col about-text">
              My email is zhanglichang2016@gmail.com
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <i className="mdi mdi-github-circle mdi-36px"/>
            </div>
            <div className="mdl-cell mdl-cell--10-col about-text">
              <a href="https://github.com/usefulfwei" className="link">https://github.com/usefulwei</a>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <i className="mdi mdi-phone mdi-36px"/>
            </div>
            <div className="mdl-cell mdl-cell--10-col about-text">
             0417517534
            </div>
          </div>
        </div>
    )
  }
}