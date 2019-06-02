import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Row, Col, CardPanel, Footer, TextInput } from 'react-materialize';
import './chat.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = { msg: '', messages: [], id: 4 };
    }
    render() {
        return (
            <div>
                 <Navbar fixed className="purple" brand={<a />} alignLinks="left" >
                    <NavItem href="/home">
                        <Icon className="black-text">arrow_back</Icon>
                    </NavItem>
                    <NavItem className="black-text">
                        <div className="valign-wrapper" style={{ height: "100%", display: "inline-block" }}>
                            <img src={ require('../imgs/thiago_photo.jpg') } style={{ width: 50, height: 50, borderRadius: 100, boxShadow: "1px 1px", verticalAlign: "middle" }}></img>
                        </div>
                    </NavItem>
                    <NavItem className="black-text right" href={ '/userInfo/' + this.state.id }>
                        Leonardo Courbassier Martins
                    </NavItem>
                    
                    <NavItem className="black-text" href={ '/videocall/' + this.state.id }>
                        <Icon>camera_alt</Icon>
                    </NavItem>
                </Navbar>

                <div className="message-wrapper" style={{ marginBottom: 20, overflowY: "auto", maxHeight: "500px", minHeight: "500px" }} >{this._getMessages()}</div>

                <Row className="purple" style={{ boxShadow: "-5px -6px 6px rgba(0, 0, 0, 0.2)", borderRadius: "20px" }}>
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
                        <img src={ require("../imgs/thiago_photo.jpg") } alt="Avatar" className="left"></img>
                        <p>{ this.state.messages[i].msg }</p>
                        <span className="time-left">{ this.state.messages[i].date }</span>
                    </div>
                );
        }
        return msg;
    }
}

const footerStyle = {
    position: "fixed",
    width:"100%",
    bottom: "0",
    right: "0",
    bottom: "0",
    left: "0",
    height: "100",
    backgroundColor: "#8e24aa"
  }

  const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )