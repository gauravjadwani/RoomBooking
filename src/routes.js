import React from 'react';
// import { browserHistory} from 'react-router';
import App from './App';
import  LandingScreen from './components/LandingScreen';
// import HomePage from './components/home/HomePage';
// import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import DetailCard from './components/DetailCard';
import {IndexRoute} from 'react-router';
import { Router, Route } from 'react-router-dom'
// import {Route, IndexRoute} from 'react-router';
export default (
  <Router>
    <Route exact path='/' component={LandingScreen}/>
      <IndexRoute component={App}/>
    <Route path='/details' component={DetailCard}/>
</Router>
//<Route path="/" component={LandingScreen}>
  //<IndexRoute component={LandingScreen}/>
  //<Route path="/d" component={DetailCard}/>
 //</Route>
);
