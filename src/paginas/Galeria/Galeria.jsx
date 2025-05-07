import React, { useState } from 'react';
import './Galeria.css';

function Galeria() {
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
    }
  ];

  const [filtroAño, setFiltroAño] = useState('');
  const [filtroEvento, setFiltroEvento] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [imagenesCargadas, setImagenesCargadas] = useState({});

  const años = [...new Set(imagenes.map(img => img.año))].sort();
  const eventos = [...new Set(imagenes.map(img => img.evento))];
  const tipos = [...new Set(imagenes.map(img => img.tipo))];

  const imagenesFiltradas = imagenes.filter(img => {
    return (
      (!filtroAño || img.año === parseInt(filtroAño)) &&
      (!filtroEvento || img.evento === filtroEvento) &&
      (!filtroTipo || img.tipo === filtroTipo)
    );
  });

  const manejarErrorImagen = (id) => {
    setImagenesCargadas(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const manejarCargaImagen = (id) => {
    setImagenesCargadas(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="pagina-galeria">
      <div className="container py-5">
        <h1 className="text-center mb-5">Galería de Fotos</h1>

        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <select 
              className="form-select" 
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
              className="form-select" 
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
              className="form-select" 
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

        <div className="row g-4">
          {imagenesFiltradas.map(imagen => (
            <div key={imagen.id} className="col-md-4">
              <div 
                className="card h-100 galeria-card"
                onClick={() => setImagenSeleccionada(imagen)}
              >
                <div className="imagen-container">
                  {!imagenesCargadas[imagen.id] && (
                    <div className="cargando-imagen">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                    </div>
                  )}
                  <img 
                    src={imagen.src} 
                    alt={imagen.alt} 
                    className={`card-img-top galeria-imagen ${imagenesCargadas[imagen.id] ? 'cargada' : 'cargando'}`}
                    onLoad={() => manejarCargaImagen(imagen.id)}
                    onError={() => manejarErrorImagen(imagen.id)}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{imagen.alt}</h5>
                  <p className="card-text">{imagen.descripcion}</p>
                  <div className="galeria-metadata">
                    <span className="badge bg-primary me-2">{imagen.año}</span>
                    <span className="badge bg-secondary me-2">{imagen.evento}</span>
                    <span className="badge bg-info">{imagen.tipo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {imagenSeleccionada && (
          <div className="modal-overlay" onClick={() => setImagenSeleccionada(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="btn-close position-absolute top-0 end-0 m-3" 
                onClick={() => setImagenSeleccionada(null)}
              />
              <img 
                src={imagenSeleccionada.src} 
                alt={imagenSeleccionada.alt} 
                className="img-fluid"
              />
              <div className="modal-info p-3">
                <h3>{imagenSeleccionada.alt}</h3>
                <p>{imagenSeleccionada.descripcion}</p>
                <div className="galeria-metadata">
                  <span className="badge bg-primary me-2">{imagenSeleccionada.año}</span>
                  <span className="badge bg-secondary me-2">{imagenSeleccionada.evento}</span>
                  <span className="badge bg-info">{imagenSeleccionada.tipo}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Galeria; 