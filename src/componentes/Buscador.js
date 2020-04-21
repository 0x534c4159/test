import React, {Component} from 'react';


class Buscador extends Component{

    buscarRef = React.createRef();
    
    obtenerDatos = (e) => {
        e.preventDefault();
        console.log(this.buscarRef.current.value);
    }

    render(){
        return(
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