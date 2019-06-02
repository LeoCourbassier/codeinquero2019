import React from 'react';
import { Row, Col, Card, CardTitle } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class CardC extends React.Component {
    render() {
        return (
                <Col m={2} s={12} style={styleCard}>
                    <Card header={<CardTitle></CardTitle>}
                        actions={[<a href="/userInfo">Visualizar</a>]}
                        style={{ textAlign: "center" }}>

                        <img src={require('../imgs/monitor' + this.props.monitor.id + '.jpg')} style={{
                            width: 150, height: 150,
                            borderRadius: 100, boxShadow: "1px 1px", display: "flex", justifyContent: "center"
                        }}></img>
                        <br></br>
                        { this.props.monitor.nome }<br />
                        { this.props.monitor.instituicao }<br/>
                        { this.props.monitor.media }
                        </Card>
                </Col>
        );
    }
}

const styleCard = {
    width: "220px",
    align: "center",
}