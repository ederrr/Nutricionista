import React, { Component } from 'react';
import grupos from '../api/grupos'
import unidades from '../api/unidades'

class ListaGrupo extends Component {

    a = {}

    buscaAlimento = (p) => {
  
        return (
          <tr>
            <td>{p.alimento}</td>
            <td>{p.porcao.map((p) => <p>{p.quantidade * this.props.match.params.quantidade} {p.unidade.map((u) => unidades.find((e) => (e.id === u)).descricao )}</p>)}</td>
          </tr>
        )
    }

  render() {
    return (
      <div>
        <table class="table bg-light mt-0">
            <thead>
                <tr>
                <th scope="col">Alimento</th>
                <th scope="col">Quantidade</th>
                </tr>
            </thead>
            <tbody>
            
            {grupos[this.props.match.params.id - 1].itens.map( a => (
                this.buscaAlimento(a)
            ))}
            </tbody>
        </table>
      </div>
    );
  }
}
export default ListaGrupo;
