import React from 'react';
import './App.css';
import Home from './components/home';
import Catalog from './components/catalog';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from './components/chat';
import UserInfo from './components/userInfo';
import Login from './components/login';
import VideoCall from './components/videocall';
import MonitorChat from './components/monitorChat';
import MonitorCatalog from './components/monitor-catalog';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/monitorCatalog" component={MonitorCatalog} />
        <Route path="/chat/:id" component={Chat} />
        <Route path="/userInfo/:id" component={UserInfo}/>
        <Route path="/login" component={Login}/>
        <Route path="/videocall/:id" component={VideoCall} />
        <Route path="/monitorChat/:id" component={MonitorChat} />
      </Router>
    );
  }
}
