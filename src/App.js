import React from 'react';
import './App.css';
import Home from './components/home';
import Catalog from './components/home';
import Bar from './components/bar';
import Footer from './components/footer';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from './components/chat';
import UserInfo from './components/userInfo';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/chat/" component={Chat} />
        <Route path="/userInfo" component={UserInfo}/>
      </Router>
    );
  }
}
