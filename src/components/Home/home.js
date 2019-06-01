import React from 'react';
import logo from '../../logo.svg';

export default class Home extends React.Component {
    render() {
        const { className } = this.props;
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                { className }
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
        );
    }
}
