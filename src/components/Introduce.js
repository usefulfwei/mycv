import React, { Component } from 'react';

export default class Introduce extends Component{
  render(){
    return(
        <div>
          <h3>Lichang Zhang</h3>
          <hr/>
          <p>
            Master student of Aalto University, CS department.
            Here apply for a opportunity of part time job to
            explore new inspiring and gain experience!
          </p>
          <br/>
              <h3>Tech stacks</h3>
              <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Html</td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Css Sass Less</td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">webpack,gulp</td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">React,react-router</td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Redux,redux-react</td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Node.js,Mongodb(mongoose)</td>
                  <td className="mdl-data-table__cell--non-numeric">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </td>
                </tr>
                </tbody>
              </table>
          <hr/>
          <h3>Pre project</h3>
          <hr/>
          <ul className="mdl-list">
            <li className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <span className="mdl-list__item-text-body">
                Finishing all front-end practices of Free-code-camp
                </span>
              </span>
              <span className="mdl-list__item-secondary-content">
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">check</i></a>
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <span className="mdl-list__item-text-body">
                My-chat, my-blog(full-stack)
                </span>
              </span>
              <span className="mdl-list__item-secondary-content">
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">check</i></a>
              </span>
            </li>
            <li className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <span className="mdl-list__item-text-body">
                Over 20 practices from react,redux demo project
                </span>
              </span>
              <span className="mdl-list__item-secondary-content">
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">check</i></a>
              </span>
            </li>
          </ul>
        </div>
    )
  }
}