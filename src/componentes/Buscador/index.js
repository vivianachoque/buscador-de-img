import React, { Component } from 'react';

class Buscador extends Component {
    render() { 
        return ( 
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen, Ejemplo: Guitarra"/>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default Buscador;
