import React from "react";
import { Link } from "react-router-dom";
import "./PiePagina.css";

function PiePagina() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Disco Stu's Dance Palace</h5>
            <p className="text-muted">
              Tu destino para la mejor música y diversión nocturna.
            </p>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/eventos" className="text-muted">Eventos</Link></li>
              <li><Link to="/galeria" className="text-muted">Galería</Link></li>
              <li><Link to="/blog" className="text-muted">Blog</Link></li>
              <li><Link to="/contacto" className="text-muted">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled text-muted">
              <li>📍 Calle 742 de Evergreen Terrace, Springfield</li>
              <li>📞 047-362-999</li>
              <li>✉️ contacto@disco.stus.cl</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="text-center text-muted">
          <small>&copy; {new Date().getFullYear()} Disco Stu's Dance Palace. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
}

export default PiePagina; 