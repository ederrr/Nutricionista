import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo'
import Lista from './components/ListaGrupo'
import Home from './components/Home'
import dietaS from './api/dietaSemana'
import dietaFds from './api/dietafds'
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frase: 'Semana',
      dieta: dietaS    
    };
    this.inverte = this.inverte.bind(this);
  }

  inverte(){
    if(this.state.frase === 'Semana'){
      this.setState({frase: 'Fim de Semana', dieta: dietaFds})
    }
    else{
      this.setState({frase: 'Semana', dieta: dietaS})
    }
  }


  render() {
    return (
      <div className="container">
        <Logo frase={this.state.frase} inverte={this.inverte} />
        <Switch>
        <Route exact path='/' render = {(props) => <Home {...props} dieta={this.state.dieta} />}/> 
        <Route path='/List/:id/:quantidade' render = {(props) => <Lista {...props} />} />
        </Switch>
      </div>
    );
  }
}
export default App;
