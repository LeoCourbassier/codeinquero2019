import React from 'react';
import CardC from './monitor-card';
import Bar from './bar';
import Footer from './footer';
import axios from "axios";
import { Row, Dropdown, Button, Icon, Divider, Switch, Col } from 'react-materialize';
// Import Materialize
import M from "materialize-css";


export default class MonitorCatalog extends React.Component {

    // default State object
    state = {
        monitors: [],
        materias: [],
        topicos: [],
        materia_selecionada: null,
        topico_selecionado: null,
        online: true,
        backup: []
    };

    componentDidMount() {
        axios
          .get("http://165.227.23.238:5000/alunos/")
          .then(response => {
            // create an array of contacts only with relevant data
            console.log(response.data)
            const newContacts = response.data.map(c => {
              return {
                credito: c.credito,
                email: c.email,
                id: c.id_aluno,
                instituicao: c.instituicao, 
                nome: c.nome,
                online: c.online,
                topicos: c.topicos
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              monitors: newContacts
            });
            // store the new state object in the component's state
            this.setState(newState);
            this.state.backup = this.state.monitors;
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
                    
                    <Col><Switch onChange={ (e) => this._filter(e) } offLabel="Qualquer Estado" onLabel="Online" /></Col>
                </Row>
                <Row style={{ margin: "30px", textAlign: "left" }}>
                    <h5>Alunos:</h5>
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

    _filter(e) {
        this.setState({ online: !this.state.online });
        console.log(this.state.online);
        this.state.monitors = JSON.parse(JSON.stringify(this.state.backup));

        if (!this.state.online) return;

        for (let i = 0; i < this.state.monitors.length; i++) {
            if (!this.state.monitors[i].online)
            {
                if (i + 1 < this.state.monitors.length) 
                {
                    this.state.monitors[i] = this.state.monitors.pop();
                    i--;
                }
                else
                    this.state.monitors.pop();
            }
        }
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
    margin: "20px",
    minHeight: "600x",
    maxHeight: "600px",
    overflowY: "scroll"
}