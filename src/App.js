import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
/*
Otra forma de crear un componente
import React, {component} from 'react';

class App() extends Component {
  render(){
    return ();
  }
}
*/

class App extends Component {
  render(){
  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes de pixabay</p>
        <Buscador />
      </div>
    </div>
  );
  }
}

export default App;
