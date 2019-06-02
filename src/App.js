import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Bar from './components/bar';
import Footer from './components/footer';
import 'materialize-css/dist/css/materialize.min.css';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <header><Bar/></header>
        <article><Home className="oi" /></article>
        <footer><Footer></Footer></footer>
      </main>
    );
  }
}
