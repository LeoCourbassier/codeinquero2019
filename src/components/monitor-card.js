import React from 'react';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class CardC extends React.Component {
    
    render() {
        return (
                <Col m={2} s={12} style={styleCard}>
                    <Card header={<CardTitle></CardTitle>}
                        actions={[<a href={"/monitorChat/" + this.props.monitor.id} ><div className="container"  style={{color: "purple" }}>Conversar</div></a>]}
                        style={{ textAlign: "center" }}>

                        <img src={require('../imgs/aluno' + this.props.monitor.id + '.jpg')} style={{
                            width: 150, height: 150,
                            borderRadius: 100, boxShadow: "1px 1px", display: "flex", justifyContent: "center"
                        }}></img>
                        <br></br>
                        { this.props.monitor.nome }<br />
                        <div>{this.props.monitor.online == 1 ? <Icon className="green-text">brightness_1</Icon> : <Icon className="red-text">clear</Icon>}</div>
                        <div style={{ minHeight:"50px", maxHeight:"50px", overflow: "auto" }}>{ this._returnNewCollection() }</div>
                        </Card>
                </Col>
        );
    }

    _returnNewCollection() {
        let r = [];
        for (let i = 0; i < this.props.monitor.topicos.length; i++)
            r.push(<div>{this.props.monitor.topicos[i].materia}</div>)
        return r;
    }
}




const styleCard = {
    width: "220px",
    align: "center",
}

