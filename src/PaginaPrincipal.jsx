import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PaginaPrincipal() {
  // Lista de eventos próximos
  const eventos = [
    {
      id: 1,
      nombre: 'Fiesta Retro',
      fecha: '2024-06-30T22:00:00',
      descripcion: '¡Ven con tus mejores atuendos de los 80!',
      imagen: '[AQUÍ VA LA IMAGEN DEL EVENTO]'
    },
    {
      id: 2,
      nombre: 'Noche Latina',
      fecha: '2024-07-15T21:00:00',
      descripcion: 'Ritmos latinos toda la noche.',
      imagen: '[AQUÍ VA LA IMAGEN DEL EVENTO]'
    }
  ];

  // Estado para la cuenta regresiva
  const [tiempoRestante, setTiempoRestante] = useState({});

  // Actualizar la cuenta regresiva cada segundo
  useEffect(() => {
    const fechaEvento = new Date(eventos[0].fecha);
    const temporizador = setInterval(() => {
      const ahora = new Date();
      const diferencia = fechaEvento - ahora;
      
      if (diferencia <= 0) {
        clearInterval(temporizador);
        setTiempoRestante({});
      } else {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);
        setTiempoRestante({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(temporizador);
  }, []);

  return (
    <div>
      {/* Banner principal */}
      <section className="banner">
        <div className="contenido-banner">
          <h2>¡Baila toda la noche con Disco Stu!</h2>
          <p>[AQUÍ VA UNA ANIMACIÓN O VIDEO]</p>
        </div>
      </section>

      {/* Sección de eventos */}
      <section className="eventos">
        <h2>Próximos Eventos</h2>
        <div className="lista-eventos">
          {eventos.map(evento => (
            <div key={evento.id} className="evento">
              <div className="imagen-evento">
                {evento.imagen}
              </div>
              <h3>{evento.nombre}</h3>
              <p>{evento.descripcion}</p>
              <p>Fecha: {new Date(evento.fecha).toLocaleString()}</p>
              <Link to={`/eventos/${evento.id}`}>Ver más</Link>
            </div>
          ))}
        </div>

        {/* Cuenta regresiva */}
        {tiempoRestante.dias !== undefined && (
          <div className="cuenta-regresiva">
            <h3>Falta para {eventos[0].nombre}</h3>
            <p>
              {tiempoRestante.dias} días {tiempoRestante.horas} horas {tiempoRestante.minutos} minutos {tiempoRestante.segundos} segundos
            </p>
          </div>
        )}
      </section>

      {/* Promociones */}
      <section className="promociones">
        <h2>Promociones Especiales</h2>
        <ul>
          <li>2x1 en entradas antes de las 11 pm</li>
          <li>Happy hour de bebidas de 10 pm a 12 am</li>
        </ul>
      </section>

      {/* Pie de página */}
      <footer>
        <div className="contacto">
          <h3>Contacto</h3>
          <p>Teléfono: 123-456-789</p>
          <p>Email: info@discostu.com</p>
        </div>
        <div className="redes">
          <h3>Síguenos</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <div className="boletin">
          <h3>Suscríbete al boletín</h3>
          <form onSubmit={e => {
            e.preventDefault();
            alert('¡Gracias por suscribirte!');
          }}>
            <input type="email" placeholder="Tu correo" required />
            <button type="submit">Suscribir</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default PaginaPrincipal;
