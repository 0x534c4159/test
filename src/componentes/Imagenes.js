import React, {Component} from 'react';

class Imagenes extends Component {

    mostrarImagens = () => {
        const imagenes = this.props.resultado;

       console.log(imagenes);
    }

    render(){
        return(
        
            <React.Fragment>
                {this.mostrarImagens()}
            </React.Fragment>
        );
    }
}

export default Imagenes 