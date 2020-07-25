import React from 'react';

const Paginacion = props => {
    return (
        <div className="py-3">
            <button onClick={props.pagAnterior} type="button" className="btn btn-info mr-1">&larr; Anterior</button>
            <button onClick={props.pagSiguiente} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;