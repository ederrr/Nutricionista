import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo'
import Lista from './components/ListaGrupo'
import Home from './components/Home'
import dieta from './api/dieta'
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Logo />
        <Switch>
        <Route exact path='/' render = {(props) => <Home {...props} dieta={dieta} />}/> 
        <Route path='/List/:id/:quantidade' render = {(props) => <Lista {...props} />} />
        </Switch>
      </div>
    );
  }
}
export default App;
