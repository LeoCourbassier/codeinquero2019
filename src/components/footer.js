import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import { Row, Dropdown, Button, Icon, Divider, Switch, Col } from 'react-materialize';
// Import Materialize
import M from "materialize-css";

export default class Footer2 extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <Footer style={footerStyle}
        copyrights="Odiene CodeInQuero 2019" >
      </Footer>
    )
  }
}

const footerStyle = {
  position: "",
  width:"100%",
  bottom:"0",
  backgroundColor: "#8e24aa",
  textAlign: "center",
}
