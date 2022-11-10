import React from 'react';
import ReactDOM from 'react-dom/client';

class Componente extends React.Component{
  render(){
    return  <h1> Olá {this.props.nome} </h1>;
  }
}
ReactDOM.render(<Componente nome="Bem vindos" />, document.getElementById('root'));
