import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Imagenes extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.resultado;

        if(imagenes.length===0) return null;

        return(
        <React.Fragment>
            <div className="col-12 p-5 row">
                {imagenes.map(imagen=>(
                    <Imagen 
                        key = {imagen.id}
                        imagen = {imagen}
                    />
                ))}
            </div>
            <Paginacion 
                pagAnterior = {this.props.pagAnterior}
                pagSiguiente = {this.props.pagSiguiente} 
            />

        </React.Fragment>
        )
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