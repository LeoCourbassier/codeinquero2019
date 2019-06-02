import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer from './footer';
import axios from "axios";
import { Row, Dropdown, Button, Icon, Divider, Switch, Col } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Catalog extends React.Component {

    // default State object
    state = {
        monitors: [],

    };

    componentDidMount() {
        axios
          .get("http://165.227.23.238:5000/monitores/")
          .then(response => {
            // create an array of contacts only with relevant data
            console.log(response.data)
            const newContacts = response.data.map(c => {
              return {
                descricao: c.descricao,
                email: c.email,
                id: c.id_monitor,
                instituicao: c.instituicao, 
                nome: c.nome
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              monitors: newContacts
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
          .catch(error => console.log(error));
      }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Bar ></Bar>
                <Row style={{ margin: "20px" }}>
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
                <Row style={{ margin: "30px", textAlign: "left" }}>
                    <h5>Monitores:</h5>
                </Row>
                <Row style={styleRow}>
                    {this.getProf()}
                </Row>
                <br></br>
                <Footer></Footer>
            </div>
        );
    }

    getProf() {
        let r = [];
        for (let i = 0; i < this.state.monitors.length; i++) {
            r.push(<CardC name={ this.state.monitors[i].nome } inst={ this.state.monitors[i].instituicao } />);
        }
        return r;
    }
}


const styleRow = {
    margin: "20px"
}