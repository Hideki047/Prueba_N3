import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

function Inicio() {
  return (
    <div className="pagina-inicio">
      <section className="hero-section">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1">¡Baila toda la noche en Disco Stu's!</h1>
              <p className="lead">La mejor música disco de los 70s</p>
              <Link to="/eventos" className="btn btn-primary btn-lg">
                Ver Eventos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="caracteristicas py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <img 
                  src="/Imagenes/mr-burns-dance.gif" 
                  alt="Mr. Burns Dancing" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h3 className="card-title">DJ en Vivo</h3>
                  <p className="card-text">Los mejores DJs de la escena disco</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100">
                <img 
                  src="/Imagenes/the-simpsons-simpsons.gif" 
                  alt="Pista de Baile" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h3 className="card-title">Pista de Baile</h3>
                  <p className="card-text">La pista más grande de la ciudad</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100">
                <img 
                  src="/Imagenes/sugar-eating-sugar.gif" 
                  alt="Bar VIP" 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h3 className="card-title">Bar VIP</h3>
                  <p className="card-text">Los mejores cócteles de la ciudad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio; 