import React, { Component } from 'react';
import { Footer} from 'react-materialize';
// Import Materialize
import M from "materialize-css";

class Footer2 extends Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <Footer styleName="TodoItem" style={footerStyle}
        copyrights="O(n) CodeInQuero"
        moreLinks={<a />}
        links={<ul />}
        className="example"
      >
        <h5 className="white-text">
          Footer Content
          </h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
          </p>
      </Footer>
    )
  }
}

const footerStyle = {
  position: "fixed",
  width:"100%",
  bottom: "0",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "#8e24aa"
}

export default Footer2;
