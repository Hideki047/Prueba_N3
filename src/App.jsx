import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importamos las páginas
import Inicio from './PaginaPrincipal.jsx';
import Eventos from './Eventos.jsx';
import Galeria from './Galeria.jsx';
import Blog from './Blog.jsx';
import Contacto from './Contacto.jsx';
import Cuenta from './Auth.jsx';

function App() {
  return (
    <Router>
      <div className="pagina">
        
        {/* Encabezado con el menú */}
        <header>
          <h1>Disco Stu's Dance Palace</h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/eventos">Eventos</Link>
            <Link to="/galeria">Galería</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/cuenta">Mi Cuenta</Link>
          </nav>
        </header>

        {/* Contenido principal */}
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
      </div>
    </Router>
  );
}

export default App;