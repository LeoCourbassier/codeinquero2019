import React from 'react';
import Bar from './bar';
import Footer from './footer';
import { Row, Col, CardPanel, TextInput, Button, Dropdown } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Login extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Bar ></Bar>

                <CardPanel className="teal" style={styleForm}>
                    <span className="white-text">

                        <TextInput label="First Name" />
                        <TextInput password label="Password" />

                        <div>
                            <Dropdown trigger={<Button>Perfil</Button>}>
                                <a href="#">Aluno</a>
                                <a href="#">Monitor</a>
                            </Dropdown>
                            <Button waves="light" style={{ marginRight: '5px' }}>
                                Login
                            </Button>
                        </div>
                    </span>
                </CardPanel>

                <Footer style={styleFooter}></Footer>
            </div>
        );
    }


}

//n funciona
const styleFooter = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%"
}

const styleForm = {
    width: "220px",
    textAlign: "center",
    position: "center",
    alignContent: "center"
}