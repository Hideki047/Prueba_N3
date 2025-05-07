import React, { useState } from 'react';

function Eventos() {
  const listaEventos = [
    {
      id: 1,
      nombre: 'Fiesta Retro',
      fecha: '2025-06-30',
      hora: '22:00',
      lugar: 'Disco Stu Club',
      artistas: ['DJ Max', 'MC Flash']
    },

    {
      id: 2,
      nombre: 'Noche Latina',
      fecha: '2025-07-15',
      hora: '21:00',
      lugar: 'Sala Tropical',
      artistas: ['DJ Salsa', 'La Banda']
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


  function handleSelect(evt) {
      setEventoSel(evt);
      setEnviado(false);
      setFormData({ nombre: '', email: '', tickets: 1 });
      setErrores({});
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let errs = {};
    if (!formData.nombre.trim()) {
      errs.nombre = 'Requerido';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Email inválido';
    }
    if (formData.tickets < 1) {
      errs.tickets = 'Debe ser al menos 1';
    }
    setErrores(errs);
    if (Object.keys(errs).length === 0) {
      setEnviado(true);
    }
  }


  return (
    <div>
      <h1>Eventos</h1>

      { !eventoSel ? (
        <ul>
          { listaEventos.map(ev => (
            <li key={ev.id}>
              <h3>{ev.nombre}</h3>
              <p> {ev.fecha} - {ev.hora} </p>
              <p>Lugar: {ev.lugar}</p>
              <button onClick={() => handleSelect(ev)}>
                Ver detalles
              </button>
            </li>
          )) }
        </ul>
      ) : (
        <div>
          <button onClick={() => setEventoSel(null)}>
            ← Volver
          </button>

          <h2>{eventoSel.nombre}</h2>
          <p>Fecha: {eventoSel.fecha}</p>
          <p>Hora: {eventoSel.hora}</p>
          <p>Lugar: {eventoSel.lugar}</p>
          <p>Artistas: { eventoSel.artistas.join(', ') }</p>


          <h3>Reservar Entradas</h3>

          { !enviado ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                { errores.nombre && <span>{errores.nombre}</span> }
              </div>

              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                { errores.email && <span>{errores.email}</span> }
              </div>

              <div>
                <label>Tickets:</label>
                <input
                  type="number"
                  name="tickets"
                  value={formData.tickets}
                  onChange={handleChange}
                  min="1"
                />
                { errores.tickets && <span>{errores.tickets}</span> }
              </div>

              <button   type="submit">Confirmar Reserva</button>
            </form>
          ) : (
            <p>¡Reserva confirmada! Revisa tu email.</p>
          )}

        </div>
      ) }


    </div>
  );
}

export default Eventos;
