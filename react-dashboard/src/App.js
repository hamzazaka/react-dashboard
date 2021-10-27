import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Topbar from './components/Topbar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
    <div className="app">
      <Topbar/>
      <div className="container">
        <SideBar/>
        <Switch>
          <Route exact path="/">
        <Home/>
        </Route>
         <Route exact path="/users">
        <UserList/>
        </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
