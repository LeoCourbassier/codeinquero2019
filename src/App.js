import React from 'react';
import './App.css';
import Home from './components/home';
import Bar from './components/bar';
import Footer from './components/footer';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chat from './components/chat';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Bar />
        <Route path="/home" component={Home} />
        <Route path="/chat/" component={Chat} />
        <Footer />
      </Router>
    );
  }
}
