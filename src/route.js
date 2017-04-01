/**
 * Created by jwdn on 2017/3/4.
 */
import React, { Component } from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Main from './components/Main';
import Introduce from './components/Introduce';
import About from './components/About';


export default class Routers extends Component{
  render(){
    return(
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={Introduce}/>
            <Route path='/about' component={About}/>
          </Route>
        </Router>
    )
  }
}