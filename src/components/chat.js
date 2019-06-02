import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Row, Col, CardPanel, Footer, TextInput } from 'react-materialize';
import './chat.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import openSocket from 'socket.io-client';


export default class Chat extends Component {

    socket = openSocket('http://165.227.23.238:8000');
    constructor(props) {
        super(props);
        this.state = { msg: '', messages: [], id: 4, monitor: {
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
        }  };
        this.socket.on('connection', res => {
            this.socket.emit('subscribeToTimer', 1000);
        });
        this.socket.on('read', res => {
            this.state.messages.push({id: 2, msg: res, date: new Date(Date.now()).toLocaleString()});
            this.forceUpdate();
            setTimeout(() => {
                document.getElementsByClassName("message-wrapper")[0].scrollTop = document.getElementsByClassName("message-wrapper")[0].scrollHeight;
            }, 500);
        });
    }

    
    componentDidMount() {
        console.log(this.props.match.params.id);
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
    componentWillMount() {
        this.setState({
            id: this.props.match.params.id
        })
    }

    render() {
        return (
            <div>
                 <Navbar fixed className="purple" brand={<a />} alignLinks="left" >
                    <NavItem href="/catalog">
                        <Icon className="black-text">arrow_back</Icon>
                    </NavItem>
                    <NavItem className="black-text">
                        <div className="valign-wrapper" style={{ height: "100%", display: "inline-block" }}>
                            <img src={ require('../imgs/monitor' + this.state.id + '.jpg') } style={{ width: 50, height: 50, borderRadius: 100, boxShadow: "1px 1px", verticalAlign: "middle" }}></img>
                        </div>
                    </NavItem>
                    <NavItem className="black-text right" href={ '/userInfo/' + this.state.id }>
                        <bold className="black-text">{this.state.monitor.nome}</bold>
                    </NavItem>
                    
                    <NavItem className="black-text" href={ '/videocall/' + this.state.id }>
                        <Icon>camera_alt</Icon>
                    </NavItem>
                </Navbar>

                <div className="message-wrapper" style={{ marginBottom: 20, overflowY: "auto", maxHeight: "800px", minHeight: "800px" }} >{this._getMessages()}</div>

                <Row className="purple" style={{ boxShadow: "-5px -6px 6px rgba(0, 0, 0, 0.2)", borderRadius: "20px"}}>
                    <Col l={11}><input value={this.state.msg}  onKeyDown={(e) => this._handleEnter(e)} onChange={ (e) => this._changeMsg(e) } type="text" className="white-text"/></Col>
                    <Col l={1} onClick={() => this._logClick()}><Icon className="white-text" small>chat</Icon></Col>
                </Row>

            </div>
        )
    }

   

    _handleEnter(e) {
        if (e.key === 'Enter') {
            let msg = this.state.msg;
            this.setState(
                {
                    msg: '',
                }
            );
            this._logClick(msg);
        }
    }

    _changeMsg(e) {
        this.setState({
            msg: e.target.value
        });
    }

    _logClick(msg = undefined) {
        if (msg == "" || this.state.msg == "") return;
        let sendText;
        if (msg !== undefined)
            sendText = msg;
        else
            sendText = this.state.msg;
        
        this.state.messages.push({ id: 1, msg: sendText, date: new Date(Date.now()).toLocaleString()});
        setTimeout(() => {
            document.getElementsByClassName("message-wrapper")[0].scrollTop = document.getElementsByClassName("message-wrapper")[0].scrollHeight;
        }, 500);
        // send to server

        this.socket.emit('write', sendText);
    }

    _getMessages() {
        let msg = [];
        for (let i = 0; i < this.state.messages.length; i++)
        {
            if (this.state.messages[i].id == 1)
                msg.push(
                    <div className="msgcontainer darker">
                        <img src={ require("../imgs/thiago_photo.jpg") } alt="Avatar" className="right"></img>
                        <p>{ this.state.messages[i].msg }</p>
                        <span className="time-left">{ this.state.messages[i].date }</span>
                    </div>
                );
            else
                msg.push(
                    <div className="msgcontainer">
                        <img src={ require('../imgs/monitor' + this.state.id + '.jpg') } alt="Avatar" className="left"></img>
                        <p>{ this.state.messages[i].msg }</p>
                        <span className="time-left">{ this.state.messages[i].date }</span>
                    </div>
                );
        }
        return msg;
    }
}