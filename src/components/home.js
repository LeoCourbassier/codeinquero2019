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
            <div style={{ backgroundColor: "#8e24aa" }}>
                <Bar></Bar>
                <Row style={{ margin: "20px", }}>
                    <Col m={2} s={12}>
                    </Col>
                    <Col m={4} s={12}>
                        <h1 style={{ color: "white" }}><b>Conectando Alunos com Alunos</b></h1>
                        <p style={{ color: "white" }}><h6>Somos um portal que possibilita alunos a ajudar outros alunos em matérias, tirando dúvidas e ensiando conteúdos.</h6></p>
                    </Col>
                    <Col m={5} s={12} >
                        <img src={require('../imgs/logo1.png')} style={{
                            width: 400, height: 400
                        }}></img>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <Row  style={{ textAlign: "center", color: "white"  }}>
                        <Col m={3} s={3}>
                            <img src={require('../imgs/home1.jpg')} style={{
                                width: 150, height: 150,
                                borderRadius: 100, boxShadow: "1px 1px"
                            }}></img>
                            <p><h5>Totalmente online</h5></p>
                        </Col>
                        <Col m={3} s={3}>
                            <img src={require('../imgs/home2.jpg')} style={{
                                width: 150, height: 150,
                                borderRadius: 100, boxShadow: "1px 1px"
                            }}></img>
                            <p><h5>Renda extra para os monitores</h5></p>
                        </Col>
                        <Col m={3} s={3}>
                            <img src={require('../imgs/home3.jpg')} style={{
                                width: 150, height: 150,
                                borderRadius: 100, boxShadow: "1px 1px"
                            }}></img>
                            <p><h5>Ajuda a qualquer hora</h5></p>
                        </Col>
                        <Col m={3} s={3}>
                            <img src={require('../imgs/home4.jpg')} style={{
                                width: 150, height: 150,
                                borderRadius: 100, boxShadow: "1px 1px"
                            }}></img>
                            <p><h5>Mensagem e video chamada</h5></p>
                        </Col>
                    </Row>
                </div>
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