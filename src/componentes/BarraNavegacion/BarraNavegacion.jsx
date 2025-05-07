import React from "react";
import { Link } from "react-router-dom";
import "./BarraNavegacion.css";

function BarraNavegacion() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Disco Stu's Dance Palace
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/eventos">Eventos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/galeria">Galería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cuenta">Mi Cuenta</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default BarraNavegacion; 