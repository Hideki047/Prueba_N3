import React, { useState } from 'react';
import './Eventos.css';

function Eventos() {
  const listaEventos = [
    {
      id: 1,
      nombre: 'Fiesta Retro',
      fecha: '2025-06-30',
      hora: '22:00',
      lugar: 'Disco Stu Club',
      artistas: ['DJ Max', 'MC Flash'],
      imagen: '/Imagenes/stu_3.gif'
    },
    {
      id: 2,
      nombre: 'Saturday Night Fever',
      fecha: '2025-07-20',
      hora: '22:00',
      lugar: 'Disco Stu Club',
      artistas: ['The Bee Gees Tribute', 'DJ Disco King'],
      imagen: '/Imagenes/disco-stu.gif'
    },
    {
      id: 3,
      nombre: 'Fiesta VIP Privada',
      fecha: '2025-08-15',
      hora: '22:00',
      lugar: 'Disco Stu Club',
      artistas: ['ABBA Tribute', 'DJ Mirror Ball'],
      imagen: '/Imagenes/sugar-eating-sugar.gif'
    },
    {
      id: 4,
      nombre: 'Noche de Michis',
      fecha: '2025-09-01',
      hora: '21:00',
      lugar: 'Disco Stu Club',
      artistas: ['Donna Summer Tribute', 'DJ Disco Queen'],
      imagen: '/Imagenes/disco_cat.gif'
    },
    {
      id: 5,
      nombre: 'Fiesta de la Bola de Cristal',
      fecha: '2025-09-15',
      hora: '22:00',
      lugar: 'Disco Stu Club',
      artistas: ['KC & The Sunshine Band', 'DJ Crystal'],
      imagen: '/Imagenes/rosco-simpsons.gif'
    },
    {
      id: 6,
      nombre: 'Noche de Bailarinas',
      fecha: '2025-10-30',
      hora: '21:00',
      lugar: 'Disco Stu Club',
      artistas: ['Chic', 'DJ Dance Master'],
      imagen: '/Imagenes/bart-the-simpsons.gif'
    }
  ];

  const [eventoSel, setEventoSel] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tickets: 1
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function seleccionarEvento(evt) {
    setEventoSel(evt);
    setEnviado(false);
    setFormData({ nombre: '', email: '', tickets: 1 });
    setErrores({});
  }

  function manejarCambio(e) {
    const { name, value } = e.target;
    let newValue = value;
    
    if (name === 'tickets') {
      newValue = Math.min(Math.max(1, parseInt(value) || 1), 10);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }

  function manejarEnvio(e) {
    e.preventDefault();
    let errs = {};
    
    if (!formData.nombre.trim()) {
      errs.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 3) {
      errs.nombre = 'El nombre debe tener al menos 3 caracteres';
    }
    
    if (!formData.email.trim()) {
      errs.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Email inválido';
    }
    
    if (formData.tickets < 1 || formData.tickets > 10) {
      errs.tickets = 'Debe ser entre 1 y 10 tickets';
    }
    
    setErrores(errs);
    if (Object.keys(errs).length === 0) {
      setEnviado(true);
    }
  }

  return (
    <div className="pagina-eventos">
      <div className="container py-5">
        <h1 className="text-center mb-5">Próximos Eventos</h1>

        {!eventoSel ? (
          <div className="row g-4">
            {listaEventos.map(ev => (
              <div key={ev.id} className="col-md-6">
                <div className="card h-100">
                  <img src={ev.imagen} className="card-img-top" alt={ev.nombre} />
                  <div className="card-body">
                    <h3 className="card-title">{ev.nombre}</h3>
                    <p className="card-text">
                      <i className="bi bi-calendar-event"></i> {ev.fecha} - {ev.hora}
                    </p>
                    <p className="card-text">
                      <i className="bi bi-geo-alt"></i> {ev.lugar}
                    </p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => seleccionarEvento(ev)}
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="evento-detalle">
            <button 
              className="btn btn-outline-primary mb-4"
              onClick={() => setEventoSel(null)}
            >
              ← Volver a eventos
            </button>

            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{eventoSel.nombre}</h2>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <img 
                      src={eventoSel.imagen} 
                      className="img-fluid rounded" 
                      alt={eventoSel.nombre} 
                    />
                  </div>
                  <div className="col-md-6">
                    <p><strong>Fecha:</strong> {eventoSel.fecha}</p>
                    <p><strong>Hora:</strong> {eventoSel.hora}</p>
                    <p><strong>Lugar:</strong> {eventoSel.lugar}</p>
                    <p><strong>Artistas:</strong> {eventoSel.artistas.join(', ')}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3>Reservar Entradas</h3>
                  
                  {!enviado ? (
                    <form onSubmit={manejarEnvio} className="mt-3">
                      <div className="mb-3">
                        <label className="form-label">Nombre:</label>
                        <input
                          type="text"
                          className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                          name="nombre"
                          value={formData.nombre}
                          onChange={manejarCambio}
                        />
                        {errores.nombre && (
                          <div className="invalid-feedback">{errores.nombre}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                          type="email"
                          className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                          name="email"
                          value={formData.email}
                          onChange={manejarCambio}
                        />
                        {errores.email && (
                          <div className="invalid-feedback">{errores.email}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Tickets:</label>
                        <input
                          type="number"
                          className={`form-control ${errores.tickets ? 'is-invalid' : ''}`}
                          name="tickets"
                          value={formData.tickets}
                          onChange={manejarCambio}
                          min="1"
                          max="10"
                        />
                        {errores.tickets && (
                          <div className="invalid-feedback">{errores.tickets}</div>
                        )}
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Confirmar Reserva
                      </button>
                    </form>
                  ) : (
                    <div className="alert alert-success mt-3">
                      ¡Reserva confirmada! Revisa tu email.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Eventos; 