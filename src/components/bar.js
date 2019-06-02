import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Divider } from 'react-materialize';
import M from "materialize-css";

export default class Bar extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <Navbar fixed="true" className="purple" brand={<a>MonitorApp</a>} alignLinks="right" style={{paddingBotton:"20px"}}>
                <NavItem href="/home" >
                    Home
                </NavItem>
                <NavItem href="/catalog">
                    Catalogo
                </NavItem>
                <NavItem href="/home">
                    Login
                </NavItem>
            </Navbar>
        )
    }
}


