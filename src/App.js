import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Imagenes from './componentes/Imagenes';

class App extends Component {

  state = {
    estado: ' ',
    imagenes2 : []
  }

  consultarApi = () => {
    const url = 'https://pixabay.com/api/?key=16180989-16199bde985cdf91ef1688b67&q=' + this.state.estado;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes2 : resultado.hits}))
  }

  busquedaDatos = (valor) => {
    this.setState({estado : valor}, () => {this.consultarApi();} )
  }

  render(){
  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes de pixabay</p>
        <Buscador datoBuscado={this.busquedaDatos}/>
      </div>
      <Imagenes resultado2 = {this.state.imagenes2} />
    </div>
    
  );
  }
}

export default App;
