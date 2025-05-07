import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Galeria = () => {
  // Datos de las imágenes con metadatos
  const imagenes = [
    {
      id: 1,
      src: '/Imagenes/bola_cristal.gif',
      alt: 'Bola de Disco',
      año: 1975,
      evento: 'Noche Retro',
      tipo: 'Decoración',
      descripcion: 'La icónica bola de disco que ilumina nuestras noches'
    },
    {
      id: 2,
      src: '/Imagenes/disco-stu.gif',
      alt: 'Disco Stu',
      año: 1978,
      evento: 'Inauguración',
      tipo: 'Personal',
      descripcion: 'El legendario Disco Stu en acción'
    },
    {
      id: 3,
      src: '/Imagenes/mr-burns-dance.gif',
      alt: 'Mr. Burns Bailando',
      año: 1976,
      evento: 'Fiesta VIP',
      tipo: 'Entretenimiento',
      descripcion: 'Mr. Burns demostrando sus mejores pasos'
    },
    {
      id: 4,
      src: '/Imagenes/the-simpsons-simpsons.gif',
      alt: 'Pista de Baile',
      año: 1977,
      evento: 'Noche Latina',
      tipo: 'Baile',
      descripcion: 'La pista de baile más famosa de Springfield'
    },
    {
      id: 5,
      src: '/Imagenes/sugar-eating-sugar.gif',
      alt: 'Bar VIP',
      año: 1979,
      evento: 'Apertura Bar',
      tipo: 'Gastronomía',
      descripcion: 'Nuestro exclusivo bar VIP'
    },
    {
      id: 6,
      src: '/Imagenes/discocat-kedi.gif',
      alt: 'DJ Cat',
      año: 1974,
      evento: 'Noche de Gatos',
      tipo: 'Entretenimiento',
      descripcion: 'El DJ más felino de la ciudad'
    },
    {
      id: 7,
      src: '/Imagenes/disco-stu-gif.gif',
      alt: 'Disco Stu Moves',
      año: 1975,
      evento: 'Concurso de Baile',
      tipo: 'Baile',
      descripcion: 'Los movimientos más famosos de Disco Stu'
    },
    {
      id: 8,
      src: '/Imagenes/stu_1.jpg',
      alt: 'Disco Stu 1',
      año: 1976,
      evento: 'Noche Retro',
      tipo: 'Personal',
      descripcion: 'Disco Stu en su mejor momento'
    },
    {
      id: 9,
      src: '/Imagenes/stu_2.jpg',
      alt: 'Disco Stu 2',
      año: 1977,
      evento: 'Fiesta VIP',
      tipo: 'Personal',
      descripcion: 'Disco Stu recibiendo a los invitados'
    },
    {
      id: 10,
      src: '/Imagenes/stu_3.gif',
      alt: 'Disco Stu 3',
      año: 1978,
      evento: 'Noche Latina',
      tipo: 'Baile',
      descripcion: 'Disco Stu bailando salsa'
    },
    {
      id: 11,
      src: '/Imagenes/stu_4.jpg',
      alt: 'Disco Stu 4',
      año: 1979,
      evento: 'Apertura Bar',
      tipo: 'Personal',
      descripcion: 'Disco Stu inaugurando el bar'
    },
    {
      id: 12,
      src: '/Imagenes/disco_stus_disco2.jpg',
      alt: 'Disco Stu Disco 2',
      año: 1978,
      evento: 'Noche Retro',
      tipo: 'Decoración',
      descripcion: 'Decoración especial con temática disco en la pista principal.'
    },
    {
      id: 13,
      src: '/Imagenes/disco_stus_sp.jpg',
      alt: 'Disco Stu Spain',
      año: 1979,
      evento: 'Fiesta Internacional',
      tipo: 'Personal',
      descripcion: 'Disco Stu en su gira internacional por España.'
    },
    {
      id: 14,
      src: '/Imagenes/disco_stus_peluche.jpg',
      alt: 'Disco Stu Peluche',
      año: 1977,
      evento: 'Noche de Peluches',
      tipo: 'Entretenimiento',
      descripcion: 'Concurso de peluches disco en la pista.'
    },
    {
      id: 15,
      src: '/Imagenes/disco_stus_disco.jpg',
      alt: 'Disco Stu Disco',
      año: 1976,
      evento: 'Noche Retro',
      tipo: 'Decoración',
      descripcion: 'Otra vista de la decoración disco en la sala principal.'
    },
    {
      id: 16,
      src: '/Imagenes/disco_stus_3d.jpg',
      alt: 'Disco Stu 3D',
      año: 1975,
      evento: 'Concurso de Baile',
      tipo: 'Baile',
      descripcion: 'Disco Stu en versión 3D durante el concurso de baile.'
    },
    {
      id: 17,
      src: '/Imagenes/disco_stus_peinado.jpg',
      alt: 'Disco Stu Peinado',
      año: 1978,
      evento: 'Noche de Estilo',
      tipo: 'Personal',
      descripcion: 'Premio al mejor peinado disco de la noche.'
    },
    {
      id: 18,
      src: '/Imagenes/disco_cat.gif',
      alt: 'Disco Cat',
      año: 1979,
      evento: 'Noche de Gatos',
      tipo: 'Entretenimiento',
      descripcion: 'El famoso gato disco animando la fiesta.'
    }
  ];

  // Estados para filtros y modal
  const [filtroAño, setFiltroAño] = useState('');
  const [filtroEvento, setFiltroEvento] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Obtener valores únicos para los filtros
  const años = [...new Set(imagenes.map(img => img.año))].sort();
  const eventos = [...new Set(imagenes.map(img => img.evento))];
  const tipos = [...new Set(imagenes.map(img => img.tipo))];

  // Filtrar imágenes
  const imagenesFiltradas = imagenes.filter(img => {
    return (
      (!filtroAño || img.año === parseInt(filtroAño)) &&
      (!filtroEvento || img.evento === filtroEvento) &&
      (!filtroTipo || img.tipo === filtroTipo)
    );
  });

  return (
    <div className="galeria-container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark disco-nav">
        <div className="container">
          <Link className="navbar-brand disco-text" to="/">
            <img src="/Imagenes/bola_cristal.gif" alt="Disco Ball" className="disco-icon" />
            Disco Stu's
          </Link>
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
                <Link className="nav-link disco-link active" to="/galeria">Galería</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disco-link" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Filtros */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <select 
              className="form-select disco-select" 
              value={filtroAño} 
              onChange={(e) => setFiltroAño(e.target.value)}
            >
              <option value="">Todos los años</option>
              {años.map(año => (
                <option key={año} value={año}>{año}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select 
              className="form-select disco-select" 
              value={filtroEvento} 
              onChange={(e) => setFiltroEvento(e.target.value)}
            >
              <option value="">Todos los eventos</option>
              {eventos.map(evento => (
                <option key={evento} value={evento}>{evento}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select 
              className="form-select disco-select" 
              value={filtroTipo} 
              onChange={(e) => setFiltroTipo(e.target.value)}
            >
              <option value="">Todos los tipos</option>
              {tipos.map(tipo => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="container mt-4">
        <div className="row g-4">
          {imagenesFiltradas.map(imagen => (
            <div key={imagen.id} className="col-md-4 col-lg-3">
              <div className="card disco-card h-100">
                <img 
                  src={imagen.src} 
                  alt={imagen.alt} 
                  className="card-img-top galeria-img" 
                  onClick={() => setImagenSeleccionada(imagen)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-body">
                  <h5 className="card-title disco-text">{imagen.alt}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      {imagen.año} - {imagen.evento}
                    </small>
                  </p>
                  <p className="card-text">{imagen.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {imagenSeleccionada && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content disco-modal">
              <div className="modal-header">
                <h5 className="modal-title disco-text">{imagenSeleccionada.alt}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setImagenSeleccionada(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img 
                  src={imagenSeleccionada.src} 
                  alt={imagenSeleccionada.alt} 
                  className="img-fluid"
                />
                <div className="mt-3">
                  <p><strong>Año:</strong> {imagenSeleccionada.año}</p>
                  <p><strong>Evento:</strong> {imagenSeleccionada.evento}</p>
                  <p><strong>Tipo:</strong> {imagenSeleccionada.tipo}</p>
                  <p>{imagenSeleccionada.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="disco-footer py-4 mt-5">
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

export default Galeria;
