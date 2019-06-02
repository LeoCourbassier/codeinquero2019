import React from 'react';
import Bar from './bar';
import Footer from './footer';
import { Row, Dropdown, Button, Icon, Divider, Switch, Col,CardPanel } from 'react-materialize';
import axios from "axios";


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            id: 1, monitor: {
                descricao: '',
                email: '',
                instituicao: '', 
                nome: '',
                media: '',
                reais_por_minuto: '',
                topicos: [{
                    materia: 'Matematica',
                    nome: 'Derivadas'
                }]
            } 
        };
    }

    componentDidMount() {
        this._getUserInfo();
    }

    componentWillMount() {
        this.setState({ 
            id: this.props.match.params.id
        });
    }

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
                            <img src={require('../imgs/monitor' + this.state.id + '.jpg')} style={{
                                width: 150, height: 150,
                                borderRadius: 100, boxShadow: "1px 1px"
                            }}></img>
                            <p><h5>{ this.state.monitor.nome }</h5></p>
                            <p><h5>Nota: { parseFloat(this.state.monitor.media).toFixed(2) }</h5></p>
                            <p><h5>Valor por min: R$ { parseFloat(this.state.monitor.reais_por_minuto).toFixed(2) }</h5></p>
                            <p><Button
                                node="a"
                                waves="light"
                                large
                                href={"/chat/" + this.state.id}
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
                                            { this.state.monitor.descricao }
                                            </span>
                                    </CardPanel>
                                </Col>
                                <Col m={12} s={12}>
                                    <CardPanel className="teal" > 
                                        <span className="white-text">
                                            <b>Materias:</b>
                                            <br/>
                                            { this._returnNewCollection() }
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

    _returnNewCollection() {
        let r = [];
        for (let i = 0; i < this.state.monitor.topicos.length; i++)
            r.push(<div>{this.state.monitor.topicos[i].materia}, em especial: {this.state.monitor.topicos[i].nome}</div>)
        return r;
    }

    _getUserInfo() {
        
        axios
          .get("http://165.227.23.238:5000/monitor/" + this.state.id)
          .then(response => {
            // create an array of contacts only with relevant data
            console.log(response.data)
            const newContacts = response.data;
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              monitor: newContacts
            });
    
            // store the new state object in the component's state
            this.setState(newState);
            console.log(JSON.stringify(this.state.monitor))
          })
          .catch(error => console.log(error));
        
    }
}