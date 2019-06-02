import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer from './footer';
import { Row, Dropdown, Button, Icon, Divider, Switch, Col } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "#8e24aa"}}>
                <Bar></Bar>
                <Row style={{ margin: "20px", height: "600px" }}>
                    <Col  m={2} s={12}>
                    </Col>
                    <Col m={4} s={12}>
                        <h1 style={{ color: "white" }}><b>Conectando Alunos com Alunos</b></h1>
                    </Col>
                    <Col m={5} s={12} >
                    <img src={require('../imgs/logo1.png')} style={{
                            width: 400, height: 400}}></img>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Footer style={{}}></Footer>
            </div>
        );
    }

    getProf() {
        let r = [];
        for (let i = 0; i < 10; i++) {
            r.push(<CardC />);
        }
        return r;
    }
}


const styleRow = {
    margin: "20px",

}