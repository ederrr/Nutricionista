import React, { Component } from 'react';
import Refeicao from './Refeicao'

class Home extends Component {

  render() {
    return (
      <div className="">
        {this.props.dieta.map( r => (
            <Refeicao key={r.id} className="my-2" refeicao={r.refeicao} nome={r.nome}/>
        ))}
      </div>
    );
  }
}
export default Home;