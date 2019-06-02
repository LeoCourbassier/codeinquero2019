import React, { Component } from 'react';
import Bar from './bar';
import Footer from './footer';
import { Row, Col, CardPanel, TextInput, Button, Dropdown } from 'react-materialize';
import axios from "axios";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' }
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Bar ></Bar>
                <Row style={{ textAlign: "center" }}>
                    <Col m={4} s={12}></Col>
                    <Col m={6} s={12}>
                        <CardPanel className="center-align center white-text" style={styleForm}>
                            <Row>
                                <Col s={12}>
                                    <TextInput value={this.state.email} onChange={(e) => this._changeMsg(e)} label="Email" />
                                    <TextInput password label="Password" />
                                </Col>
                            </Row>
                            <Button onClick={() => this._checkLogin()} waves="light" style={{ marginRight: '5px', backgroundColor: "gray" }}>Login</Button>
                        </CardPanel>
                    </Col>
                </Row>
                <Footer style={styleFooter}></Footer>
            </div>
        );
    }

    _checkLogin() {
        axios
            .get("http://165.227.23.238:5000/alunos/")
            .then(response => {
                // create an array of contacts only with relevant data
                console.log(response.data)
                response.data.forEach((it) => {
                    if (it.email == this.state.email)
                        window.location.href = "/catalog";
                })
            })
            .catch(error => console.log(error));

        axios
            .get("http://165.227.23.238:5000/monitores/")
            .then(response => {
                // create an array of contacts only with relevant data
                console.log(response.data)
                response.data.forEach((it) => {
                    if (it.email == this.state.email)
                        window.location.href = "/monitorCatalog";
                })
            })
            .catch(error => console.log(error));
    }

    _changeMsg(e) {
        this.setState({
            email: e.target.value
        });
    }
}

const styleFooter = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%"
}

const styleForm = {
    position: "relative",
    margin: "20",
    backgroundColor: "#8e24aa",
    width: "400px",
    textAlign: "center"
}