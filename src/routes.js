import React from 'react';
// import { browserHistory} from 'react-router';
import App from './App';
import  LandingScreen from './components/LandingScreen';
// import HomePage from './components/home/HomePage';
// import CoursesPage from './components/course/CoursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import DetailCard from './components/DetailCard';
// import {Route,IndexRoute} from 'react-router';
import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/d' component={DetailCard}/>
  {/* <IndexRoute component={DetailCard}/> */}
</Switch>
);
