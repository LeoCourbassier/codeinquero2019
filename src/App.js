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


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/chat/" component={Chat} />
        <Route path="/userInfo" component={UserInfo}/>
        <Route path="/login" component={Login}/>
        <Route path="/videocall/:id" component={VideoCall} />
      </Router>
    );
  }
}
