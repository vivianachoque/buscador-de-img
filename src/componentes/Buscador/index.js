import React, { Component } from 'react';

class Buscador extends Component {
 busquedaRef = React.createContext.Ref();
  render() {
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.busquerdaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca tu Imagen. Ejemplo: Guitarra"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
