import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Row, Col, CardPanel } from 'react-materialize';
import Footer from './footer';

export default class Chat extends Component {

    render() {
        return (
             <div>
                 <Navbar fixed="true" className="purple" brand={<a />} alignLinks="left" >
                    <NavItem href="/home">
                        <Icon className="black-text">arrow_back</Icon>
                    </NavItem>
                    <NavItem className="black-text">
                        <div class="valign-wrapper" style={{ height: "100%", display: "inline-block" }}>
                            <img src={ require('../imgs/thiago_photo.jpg') } style={{ width: 50, height: 50, 
                        borderRadius: 100, boxShadow: "1px 1px", verticalAlign: "middle" }}></img>
                        </div>
                    </NavItem>
                    <NavItem className="black-text right">
                        Leonardo Courbassier Martins
                    </NavItem>
                    <NavItem className="black-text">
                        <Icon>call</Icon>
                    </NavItem>
                </Navbar>

                <div style={{ flex: 1 }}>
                    <CardPanel style={{ flex: 1 }} className="teal">
                        <span className="white-text">
                    For a simpler card with less markup, try using a card panel which just has padding and a shadow effect
                        </span>
                    </CardPanel>
                </div>

                <Footer />
             </div>
        )
    }
}

