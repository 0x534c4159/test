import React, {Component} from 'react';

class Imagenes extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.resultado2;
        if(imagenes.length === 0) return null;
    }

    render(){
        return(
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}

export default Imagenes 