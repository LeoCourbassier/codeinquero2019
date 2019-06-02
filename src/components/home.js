import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer from './footer';
import { Row, Dropdown, Button, Icon, Divider,Switch, Col } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Bar ></Bar>
                <Row  style={{margin:"20px"}}>
                    <Col>
                    <Dropdown trigger={<Button>Materias</Button>}>
                        <a href="#">one</a>
                        <a href="#"> two</a>
                        <Divider />
                        <a href="#">three</a>
                        <a href="#">
                            <Icon>view_module</Icon>
                            four</a>
                        <a href="#">
                            <Icon> cloud</Icon>
                            five</a>
                    </Dropdown>
                    </Col>
                    <Col>
                    <Dropdown trigger={<Button>Temas</Button>}>
                        <a href="#">one</a>
                        <a href="#"> two</a>
                        <Divider />
                        <a href="#">three</a>
                        <a href="#">
                            <Icon>view_module</Icon>
                            four</a>
                        <a href="#">
                            <Icon> cloud</Icon>
                            five</a>
                    </Dropdown>
                    </Col>
                    <Col><Switch offLabel="Online" onLabel="" /></Col>
                </Row >
                <Row style={{margin:"30px"}}>
                    <h5>Monitores:</h5>
                </Row>
                <Row style={styleRow}>
                    {this.getProf()}
                </Row>
                <br></br>
                <br></br>
                <Footer></Footer>
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
    margin:"20px"
}