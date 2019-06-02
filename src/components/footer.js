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
            <Col  style={{ width: "300px" }}>
              <p><b>Fale com a gente</b></p>
              +55 12 982054061
              meajuda@monitorapp.com
          </Col>
          <Col style={{ width: "300px" }}>
              <p><b>Fale com a gente</b></p>
              +55 12 982054061
              meajuda@monitorapp.com
          </Col>
          <Col  style={{ width: "300px" }}>
              <p><b>Fale com a gente</b></p>
              +55 12 982054061
              meajuda@monitorapp.com
          </Col>
      </Footer>
    )
  }
}

const footerStyle = {
  position: "absolute",
  width:"100%",
  backgroundColor: "#8e24aa",
  textAlign: "center",
}
