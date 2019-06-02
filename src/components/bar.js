import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Divider } from 'react-materialize';
import M from "materialize-css";

export default class Bar extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <Navbar fixed="true" className="purple" brand={<a>Logo</a>} alignLinks="right" style={{paddingBotton:"20px"}}>
                <NavItem href="/chat/" >
                    Getting started
                </NavItem>
                <NavItem href="/home">
                    Components
                </NavItem>
                <Dropdown trigger={<a>Dropdown</a>}>
                    <a href="">
                        one</a>
                    <a href="">
                        two</a>
                    <Divider />
                    <a href="">
                        three</a>
                </Dropdown>
            </Navbar>
        )
    }
}


