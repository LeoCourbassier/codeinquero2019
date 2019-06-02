import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer2 from './footer';
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
        online: 1,
        backup: []
    };

    componentDidMount() {
        axios
          .get("http://165.227.23.238:5000/monitores/")
          .then(response => {
            // create an array of contacts only with relevant data
            console.log(response.data)
            const newContacts = response.data;
    
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
            <div style={{ textAlign: "center", overflowY: "scroll"}}>
                <Bar ></Bar>
                <Row style={{ margin: "20px" }}>
                    <Col>
                        <Dropdown trigger={<Button>Matérias</Button>} value={this.state.materia_selecionada} > 
                            {this.showMateria()}
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown trigger={<Button>Tópicos</Button>}>
                        {this.showTopicos()}
                        </Dropdown>
                    </Col>
                    <Col><Switch checked={ this.state.online } onChange={(e) => this._filter(e)} offLabel="Qualquer Estado" onLabel="Apenas Online" /></Col>
                </Row>
                <Row style={{ marginLeft: "30px", textAlign: "left" }}>
                    <h5>Monitores:</h5>
                </Row>
                <Row style={styleRow}>
                    {this.getProf()}
                </Row>
                <br></br>
                <Footer2></Footer2>
            </div>
        );
    }

    _filter(e, update = true) {
        
        if (update) this.setState({ online: !this.state.online });
        console.log(this.state.online);
        if (update) this.state.monitors = JSON.parse(JSON.stringify(this.state.backup));

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
        this.forceUpdate();
    }

    _filterByTopics(e) {
        this.setState({ topico_selecionado: e });
        console.log(e);
        this.state.monitors = JSON.parse(JSON.stringify(this.state.backup));
        if (e == 'Todas') return;
        
        for (let i = 0; i < this.state.monitors.length; i++) {
            if (this.state.monitors[i] == undefined || this.state.monitors[i].topicos == undefined || this.state.monitors[i].topicos == null) 
            continue;
            else
            {
                if (this.state.monitors[i].topicos.length == 0) 
                {
                    if (i + 1 < this.state.monitors.length) 
                    {
                        this.state.monitors[i] = this.state.monitors.pop();
                        i--;
                    }
                    else
                    this.state.monitors.pop();
                    continue;
                }
            }
            let flag = false;
            for (let j = 0; j < this.state.monitors[i].topicos.length; j++) {
                if (this.state.monitors[i].topicos[j].nome == e)
                    flag = true;
            }

            if (!flag)
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
        this._filter(!this.state.online, false);
        this.forceUpdate();
    }

    _filterByDiscipline(e) {
        this.setState({ materia_selecionada: e });
        console.log(e);
        this.state.monitors = JSON.parse(JSON.stringify(this.state.backup));
        if (e == 'Todas') return;
        
        for (let i = 0; i < this.state.monitors.length; i++) {
            if (this.state.monitors[i] == undefined || this.state.monitors[i].topicos == undefined || this.state.monitors[i].topicos == null) 
            continue;
            else
            {
                if (this.state.monitors[i].topicos.length == 0) 
                {
                    if (i + 1 < this.state.monitors.length) 
                    {
                        this.state.monitors[i] = this.state.monitors.pop();
                        i--;
                    }
                    else
                    this.state.monitors.pop();
                    continue;
                }
            }
            let flag = false;
            for (let j = 0; j < this.state.monitors[i].topicos.length; j++) {
                if (this.state.monitors[i].topicos[j].materia == e)
                    flag = true;
            }

            if (!flag)
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
        this._filter(!this.state.online, false);
        this.forceUpdate();
    }

    getProf() {
        let r = [];
        for (let monitor of this.state.monitors) {
            r.push(<CardC monitor={ monitor } />);
        }
        return r;
    }

    showMateria(){
        let r = [];
        for (let materia of this.state.materias) {
            r.push(<a onClick={() => this._filterByDiscipline(materia)}>{ materia } </a>);
        }
        r.push(<a onClick={() => this._filterByDiscipline('Todas')}>{ 'Todas' } </a>);
        return r;
    }

    showTopicos(){
        let r = [];
        for (let i = 0; i < this.state.topicos.length; i++) {
            r.push(<a onClick={() => this._filterByTopics(this.state.topicos[i].nome)}>{ this.state.topicos[i].nome} </a>);
        }
        r.push(<a onClick={() => this._filterByTopics('Todas')}>{ 'Todas' } </a>);
        return r;
    }
}


const styleRow = {
    margin: "20px",
    minHeight: "600px",
    maxHeight: "600px",
    overflowY: "scroll"
}