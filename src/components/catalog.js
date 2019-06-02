import React from 'react';
import CardC from './card';
import Bar from './bar';
import Footer2 from './footer';
import axios from "axios";
import { Row, Dropdown, Button, Icon, Divider, Switch, Col } from 'react-materialize';
// Import Materialize


export default class Catalog extends React.Component {

    // default State object
    state = {
        monitors: [],
        materias: [],
        topicos: [],
        materia_selecionada: 'Todas',
        topico_selecionado: 'Todas',
        online: false,
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

            this.state.backup = JSON.parse(JSON.stringify(this.state.monitors));
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
                        <Dropdown trigger={<Button>Matérias</Button>} value={this.state.materia_selecionada} > 
                            {this.showMateria()}
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown trigger={<Button>Tópicos</Button>}>
                        {this.showTopicos()}
                        </Dropdown>
                    </Col>
                    <Col><Switch checked={ this.state.online } onChange={(e) => this._changeOnline(e)} offLabel="Qualquer Estado" onLabel="Apenas Online" /></Col>
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

    

    _filter(what = false) {
        let e = what? !this.state.online : this.state.online;

        for (let i = 0; i < this.state.monitors.length; i++) {
            let flag = false;
            if (this.state.monitors[i].online == e || !e)
                flag = true;

            if (flag)
            {
                for (let j = 0; j < this.state.monitors[i].topicos.length; j++)
                {
                    console.log(this.state.monitors[i].topicos[j].nome + "|" + this.state.topico_selecionado);
                    if (this.state.monitors[i].topicos[j].nome != this.state.topico_selecionado)
                    {
                        flag = this.state.topico_selecionado == 'Todas';
                    } 
                    else {
                        flag = true;
                        break;
                    };
                }
            }

            if (flag)
            {
                for (let j = 0; j < this.state.monitors[i].topicos.length; j++)
                {
                    console.log(this.state.monitors[i].topicos[j].nome + "|" + this.state.materia_selecionada);
                    if (this.state.monitors[i].topicos[j].materia != this.state.materia_selecionada)
                    {
                        flag = this.state.materia_selecionada == 'Todas';
                    } 
                    else {
                        flag = true;
                        break;
                    };
                }
            }
            
            if (this.state.monitors[i].topicos.length == 0 && this.state.topico_selecionado != 'Todas') flag = false;
            if (this.state.monitors[i].topicos.length == 0 && this.state.materia_selecionada != 'Todas') flag = false;
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
        this.forceUpdate();
    }

    _changeTopic(e) {
        this.setState({ topico_selecionado: e });
        console.log(e);
        if (e == 'Todas') {
            this.setState({
                monitors: JSON.parse(JSON.stringify(this.state.backup))
            })
        } 
        
        this.forceUpdate();
        setTimeout(() => this._filter(), 500);
    }

    _changeDiscipline(e) {
        this.setState({ materia_selecionada: e });
        console.log(e);
        if (e == 'Todas') {
            this.setState({
                monitors: JSON.parse(JSON.stringify(this.state.backup))
            })
        } 
        
        this.forceUpdate();
        setTimeout(() => this._filter(), 500);
    }

    _changeOnline(e) {
        e = !this.state.online;
        this.setState({ online: e });
        if (!e) {
            this.setState({
                monitors: JSON.parse(JSON.stringify(this.state.backup))
            })
        } 
        this.forceUpdate();
        setTimeout(() => this._filter(), 500);
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
            r.push(<a onClick={() => this._changeDiscipline(materia)}>{ materia } </a>);
        }
        r.push(<a onClick={() => this._changeDiscipline('Todas')}>{ 'Todas' } </a>);
        return r;
    }

    showTopicos(){
        let r = [];
        for (let i = 0; i < this.state.topicos.length; i++) {
            r.push(<a onClick={() => this._changeTopic(this.state.topicos[i].nome)}>{ this.state.topicos[i].nome} </a>);
        }
        r.push(<a onClick={() => this._changeTopic('Todas')}>{ 'Todas' } </a>);
        return r;
    }
}


const styleRow = {
    margin: "20px",
    minHeight: "350px",
    maxHeight: "350px",
    overflowY: "scroll"
}