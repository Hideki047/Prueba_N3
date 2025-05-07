import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./estilos/global.css";

import BarraNavegacion from "./componentes/BarraNavegacion/BarraNavegacion";
import PiePagina from "./componentes/PiePagina/PiePagina";

import Inicio from "./paginas/Inicio/Inicio";
import Eventos from "./paginas/Eventos/Eventos";
import Galeria from "./paginas/Galeria/Galeria";
import Blog from "./paginas/Blog/Blog";
import Contacto from "./paginas/Contacto/Contacto";
import Cuenta from "./paginas/Cuenta/Cuenta";

function App() {
  return (
    <Router>
      <div className="pagina">
        <BarraNavegacion />
        
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cuenta" element={<Cuenta />} />
          </Routes>
        </main>

        <PiePagina />
      </div>
    </Router>
  );
}

export default App;