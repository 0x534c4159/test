import React, {Component} from 'react';
import Buscador from './componentes/Buscador';

class App extends Component {


  busquedaDatos = (valor) => {
    console.log(valor);
  }

  render(){
  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes de pixabay</p>
        <Buscador datoBuscado={this.busquedaDatos}/>
      </div>
    </div>
  );
  }
}

export default App;
