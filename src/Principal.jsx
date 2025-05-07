import React, { useState, useEffect } from 'react';

function HomePage() {
  // Datos de ejemplo para eventos
  const eventos = [
    {
      id: 1,
      nombre: 'Fiesta Retro',
      fecha: '2025-06-30T22:00:00',
      descripcion: '¡Ven con tus mejores atuendos de los 80!',
      imagen: null
    },
    {
      id: 2,
      nombre: 'Noche Latina',
      fecha: '2025-07-15T21:00:00',
      descripcion: 'Ritmos latinos toda la noche.',
      imagen: null
    }
  ];

  // Estado para la cuenta regresiva del próximo evento
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const nextEventDate = new Date(eventos[0].fecha);
    const timer = setInterval(() => {
      const now = new Date();
      const diff = nextEventDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
      } else {
        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Encabezado */}
      <header>
        <h1>Disco Stu's Dance Palace</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="/eventos">Eventos</a>
          <a href="/galeria">Galería</a>
          <a href="/blog">Blog</a>
          <a href="/contacto">Contacto</a>
        </nav>
      </header>

      {/* Banner Animado */}
      <section className="banner">
        <div className="animacion">
          {/* aquí debe ir [imagen o video o audio] */}
          <h2>¡Baila toda la noche con Disco Stu!</h2>
        </div>
      </section>

      {/* Sección de Eventos Destacados */}
      <section className="eventos-destacados">
        <h2>Próximos Eventos</h2>
        <ul>
          {eventos.map(evento => (
            <li key={evento.id}>
              {/* aquí debe ir [imagen] */}
              <h3>{evento.nombre}</h3>
              <p>{evento.descripcion}</p>
              <p>Fecha: {new Date(evento.fecha).toLocaleString()}</p>
            </li>
          ))}
        </ul>

        {/* Cuenta regresiva para el primer evento */}
        {timeLeft.days !== undefined && (
          <div className="cuenta-regresiva">
            <h3>Cuenta regresiva para {eventos[0].nombre}</h3>
            <p>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </div>
        )}
      </section>

      {/* Sección de Promociones Especiales */}
      <section className="promociones">
        <h2>Promociones Especiales</h2>
        <ul>
          <li>Descuento 2x1 en entradas antes de las 11 pm</li>
          <li>Happy hour de bebidas de 10 pm a 12 am</li>
        </ul>
      </section>

      {/* Pie de Página */}
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
          {/* aquí debe ir [mapa] */}
        </div>
        <div className="suscripcion">
          <h3>Suscríbete al boletín</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              alert('¡Gracias por suscribirte!');
            }}
          >
            <input type="email" placeholder="Tu correo" required />
            <button type="submit">Suscribir</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
