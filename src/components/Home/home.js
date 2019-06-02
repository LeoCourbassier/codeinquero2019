import React from 'react';
import CardC from './card';
import { Row, Col, Card, CardTitle } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Home extends React.Component {
    render() {
        return (
            <div>
            {this.getProf()}
            <CardC></CardC>
            </div>
        );
    }

    getProf() {
        let r = [];
        for (let i = 0; i < 10; i++)
        {
            r.push(<CardC></CardC>);
        }
        return r;
    }
}