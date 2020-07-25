import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Imagenes from './componentes/Imagenes';


class App extends Component {

  state = {
    estado: ' ',
    imagenes : [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start')
  }

  pagAnterior = () => {
    let pagina = this.state.pagina
    if(pagina ===1 ) return null
    pagina -= 1
    this.setState({pagina}, () => {this.consultarApi()})
  }

  pagSiguiente = () => {
    let pagina = this.state.pagina
    pagina += 1
    this.setState({pagina}, () => {this.consultarApi()})
  }

  /* consultarApi = () => {
    const url = 'https://pixabay.com/api/?key=16180989-16199bde985cdf91ef1688b67&q=' + this.state.estado;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes2 : resultado.hits}))
  } */

  consultarApi = async() => {
    const url = `https://pixabay.com/api/?key=16180989-16199bde985cdf91ef1688b67&q=${this.state.estado}&per_page=30&page=${this.state.pagina}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      this.setState({imagenes: data.hits})
      this.scroll()
    } catch (error) {
      console.log(error);
    }
  }

  busquedaDatos = (valor) => {
    this.setState({estado : valor, pagina : 1}, () => {this.consultarApi()} )
  }

  render(){
  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes de pixabay</p>
        <Buscador datoBuscado={this.busquedaDatos}/>
      </div>
      <div className="row justify-content-center">
        <Imagenes 
          resultado = {this.state.imagenes}
          pagAnterior = {this.pagAnterior}
          pagSiguiente = {this.pagSiguiente} 
        />
      </div>
    </div>
    
  );
  }
}

export default App;
