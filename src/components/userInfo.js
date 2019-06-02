import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer from './footer';
import { Row, Dropdown, Button, Icon, Divider, Switch, Col,CardPanel } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Home extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Bar ></Bar>
                <br></br>
                <div class="content">
                    <Row>
                        <Col m={1} s={12}></Col>
                        <Col m={4} s={12} >
                            <br/>
                            <img src={require('../imgs/thiago_photo.jpg')} style={{
                                width: 150, height: 150,
                                borderRadius: 100, boxShadow: "1px 1px"
                            }}></img>
                            <p><h5>Leonardo Courbassier</h5></p>
                            <p><h5>Nota: 4.5</h5></p>
                            <p><Button
                                node="a"
                                waves="light"
                                large
                                href="/chat"
                                style={{ marginRight: '5px' }}>
                                Conversar
                                <Icon left>chat</Icon>
                            </Button></p>
                        </Col>
                        <Col m={5} s={12} >
                            <p><h5>Informações</h5></p>
                            <Row>
                                <Col m={12} s={12}>
                                    <CardPanel className="teal" > 
                                        <span className="white-text">
                                            <b>Descrição:</b>
                                            <br/>
                                            Minha descrição
                                            </span>
                                    </CardPanel>
                                </Col>
                                <Col m={12} s={12}>
                                    <CardPanel className="teal" > 
                                        <span className="white-text">
                                            <b>Materias:</b>
                                            <br/>
                                            Minha descrição
                                            </span>
                                    </CardPanel>
                                </Col>
                                <Col m={12} s={12}>
                                    <CardPanel className="teal" > 
                                        <span className="white-text">
                                            <b>Horários:</b>
                                            <br/>
                                            <p>Segunda:</p>
                                            <p>Terça:</p>
                                            <p>Quarta:</p>
                                            <p> Quinta:</p>
                                            <p>Sexta:</p>
                                            </span>
                                    </CardPanel>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <br></br>
                <Footer></Footer>
            </div>
        );
    }
}


const styleRow = {
}