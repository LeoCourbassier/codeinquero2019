import React, { Component } from 'react';
import { Navbar, NavItem, Dropdown, Divider } from 'react-materialize';
// Import Materialize
import M from "materialize-css";

class Bar extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <Navbar brand={<a />} alignLinks="right" style={{backgroundColor:"green"}}>
                <NavItem href="">
                    Getting started</NavItem>
                <NavItem href="components.html">
                    Components</NavItem>
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

export default Bar;
