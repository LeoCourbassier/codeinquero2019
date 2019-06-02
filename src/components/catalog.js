import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer from './footer';
import axios from "axios";
import { Row, Dropdown, Button, Icon, Divider, Switch, Col } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class Catalog extends React.Component {

    // default State object
    state = {
        monitors: [],
        materias: [],
        topicos: [],
        materia_selecionada: null,
        topico_selecionado: null,
    };

    componentDidMount() {
        axios
          .get("http://165.227.23.238:5000/monitores/")
          .then(response => {
            // create an array of contacts only with relevant data
            console.log(response.data)
            const newContacts = response.data.map(c => {
              return {
                descricao: c.descricao,
                email: c.email,
                id: c.id_monitor,
                instituicao: c.instituicao, 
                nome: c.nome,
                media: c.media
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              monitors: newContacts
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
          .catch(error => console.log(error));

          axios
          .get("http://165.227.23.238:5000/topicos/")
          .then(response => {
            // create an array of contacts only with relevant data
            console.log(response.data)
            const newContacts = response.data.map(c => {
              
            return {
                id: c.id_topico,
                materia: c.materia,
                nome: c.nome
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
                topicos: newContacts,
                materias: [...new Set(newContacts.map(t => t.materia))]
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
          .catch(error => console.log(error));
      }

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Bar ></Bar>
                <Row style={{ margin: "20px" }}>
                    <Col>
                        <Dropdown trigger={<Button>Matérias</Button>}>
                            {this.showMateria()}
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown trigger={<Button>Tópicos</Button>}>
                        {this.showTopicos()}
                        </Dropdown>
                    </Col>
                    <Col><Switch offLabel="Online" onLabel="" /></Col>
                </Row >
                <Row style={{ margin: "30px", textAlign: "left" }}>
                    <h5>Monitores:</h5>
                </Row>
                <Row style={styleRow}>
                    {this.getProf()}
                </Row>
                <br></br>
                <Footer></Footer>
            </div>
        );
    }

    getProf() {
        let r = [];
        for (let monitor of this.state.monitors.filter(mon => {
            if (this.state.materia_selecionada == null || this.state.topico_selecionado == null) {
                return true;
            }
            return this.state.monitors.topicos.findIndex(top => top == this.state.topico_selecionado) != -1;
        })) {
            r.push(<CardC monitor={ monitor } />);
        }
        return r;
    }

    showMateria(){
        let r = [];
        for (let materia of this.state.materias) {
            r.push(<a onpress=''>{ materia } </a>);
        }
        return r;
    }

    showTopicos(){
        let r = [];
        for (let i = 0; i < this.state.topicos.length; i++) {
            r.push(<a >{ this.state.topicos[i].nome} </a>);
        }
        return r;
    }
}


const styleRow = {
    margin: "20px"
}