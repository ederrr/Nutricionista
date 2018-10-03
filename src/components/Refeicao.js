import React, { Component } from 'react';
import grupos from '../api/grupos'
import unidades from '../api/unidades'
import {Link} from 'react-router-dom';

class Refeicao extends Component {

  a = {}

  buscaAlimento = (r) => {
    this.a = grupos[r.grupo].itens.find((e) => (e.id === r.alimento))

      return (
        <tr className="border">
        <Link to= {`/List/${r.grupo}/${r.quantidade}`}>  <td className="text-dark border-white">{this.a.alimento}</td></Link>
          <td>{this.a.porcao.map((p) => <p>{p.quantidade * r.quantidade} {p.unidade.map((u) => unidades.find((e) => (e.id === u)).descricao )}</p>)}</td>
        </tr>
      )
  }

  render() {
      return (
        <div className={`bg-secondary border border-white rounded my-2`}>
          <p className={`text-white h5 px-2 pt-1`} >{this.props.nome}</p>
          <p className={`text-white h5 px-2 pt-1`} >{this.props.horario}</p>
          <table class="table bg-light mt-0">
              <thead>
                <tr>
                  <th scope="col" className="col w-50">Alimento</th>
                  <th scope="col" className="col w-50">Quantidade</th>
                </tr>
              </thead>
              <tbody>
              {this.props.refeicao.map( p => (
                 this.buscaAlimento(p)
              ))}
              </tbody>
            </table>
          </div>
    );
  }
}
export default Refeicao;
