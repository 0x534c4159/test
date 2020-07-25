import React, {Component} from 'react';


class Buscador extends Component{

    //crear una variable de referencia
    buscarRef = React.createRef();
    
    //creamos una funcion para el submit
    obtenerDatos = (e) => {
        e.preventDefault();
        //recibimos la funcion enviada por props desde App.js
        this.props.datoBuscado(this.buscarRef.current.value);
        //console.log(this.buscarRef.current.value)
        
    }

    render(){
        return(
            //onSubmit usamos la funcion creada
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" ref={this.buscarRef} className="form-control" placeholder="Buscador de imagenes" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;