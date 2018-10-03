import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo'
import Lista from './components/ListaGrupo'
import Home from './components/Home'
import dietaS from './api/dietaSemana'
import dietaFds from './api/dietaFds'
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frase: 'Semana',
      dieta: dietaS, 
      color: 'warning'   
    };
    this.inverte = this.inverte.bind(this);
  }

  inverte(){
    if(this.state.frase === 'Semana'){
      this.setState({frase: 'Fim de Semana', dieta: dietaFds, color: 'primary'})
    }
    else{
      this.setState({frase: 'Semana', dieta: dietaS, color: 'warning'})
    }
  }


  render() {
    return (
      <div className="container">
        <Logo frase={this.state.frase} inverte={this.inverte} color={this.state.color} />
        <Switch>
        <Route exact path='/' render = {(props) => <Home {...props} dieta={this.state.dieta} color={this.state.color} />}/> 
        <Route path='/List/:id/:quantidade' render = {(props) => <Lista {...props} color={this.state.color} />} />
        </Switch>
      </div>
    );
  }
}
export default App;
