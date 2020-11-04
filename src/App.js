import React from 'react';
import Buscador from './componentes/Buscador';

datosBusqueda = (termino) => {
    console.log(termino);
}

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
        datosBusqueda = {this.datosBusqueda}
         />
      </div>
    </div>
  );
}

export default App;
