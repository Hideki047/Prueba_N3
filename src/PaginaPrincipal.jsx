import React from 'react';
import { Link } from 'react-router-dom';

const PaginaPrincipal = () => {
  return (

    <div className="disco-theme">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark disco-nav">
        <div className="container">

          <Link className="navbar-brand disco-text" to="/">
            <img src="/Imagenes/bola_cristal.gif" alt="Disco Ball" className="disco-icon" />Disco Stu's</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link disco-link" to="/">Inicio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link disco-link" to="/eventos">Eventos</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link disco-link" to="/galeria">Galería</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link disco-link" to="/contacto">Contacto</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-section position-relative">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-1 disco-title">¡Baila toda la noche Disco Stu's!</h1>
              <p className="lead disco-text">La mejor música disco de los 70s</p>
              <Link to="/eventos" className="btn btn-lg disco-btn">Eventos</Link>
            </div>
            <div className="col-lg-6">
              <img src="/Imagenes/disco-stu.gif" alt="Disco Stu" className="img-fluid disco-image" />
            </div>
          </div>
        </div>
      </div>

      <section className="features py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">

              <div className="card disco-card h-100">
                <img src="/Imagenes/mr-burns-dance.gif" alt="Mr. Burns Dancing" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title disco-text">DJ en Vivo</h3>
                  <p className="card-text">Los mejores DJs de la escena disco</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="card disco-card h-100">
                <img src="/Imagenes/the-simpsons-simpsons.gif" alt="Dance Floor" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title disco-text">Pista de Baile</h3>
                  <p className="card-text">La pista más grande de la ciudad</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="card disco-card h-100">
                <img src="/Imagenes/sugar-eating-sugar.gif" alt="Cocktails" className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title disco-text">Bar VIP</h3>
                  <p className="card-text">Los mejores cócteles de la ciudad y MÁS!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="disco-footer py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="disco-text">Disco Stu's</h4>
              <p>La mejor discoteca de los 70s</p>
            </div>
            <div className="col-md-4">
              <h4 className="disco-text">Enlaces Rápidos</h4>
              <ul className="list-unstyled">
                <li><Link to="/eventos" className="disco-link">Eventos</Link></li>
                <li><Link to="/galeria" className="disco-link">Galería</Link></li>
                <li><Link to="/contacto" className="disco-link">Contacto</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="disco-text">Síguenos</h4>
              <div className="social-links">
                <a href="#" className="disco-link me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="disco-link me-3"><i className="bi bi-instagram"></i></a>
                <a href="#" className="disco-link"><i className="bi bi-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PaginaPrincipal;
