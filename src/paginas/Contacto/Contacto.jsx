import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function manejarEnvio(e) {
    e.preventDefault();
    let errs = {};
    
    if (!form.nombre.trim()) {
      errs.nombre = 'El nombre es requerido';
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      errs.email = 'Email inválido';
    }
    if (!form.mensaje.trim()) {
      errs.mensaje = 'El mensaje es requerido';
    }
    
    setErrores(errs);
    if (Object.keys(errs).length === 0) {
      setEnviado(true);
    }
  }

  return (
    <div className="pagina-contacto">
      <div className="container py-5">
        <h1 className="text-center mb-5">Contacto</h1>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title mb-4">Envíanos un mensaje</h2>
                
                {!enviado ? (
                  <form onSubmit={manejarEnvio}>
                    <div className="mb-3">
                      <label className="form-label">Nombre:</label>
                      <input
                        type="text"
                        className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                        name="nombre"
                        value={form.nombre}
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
                        value={form.email}
                        onChange={manejarCambio}
                      />
                      {errores.email && (
                        <div className="invalid-feedback">{errores.email}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Mensaje:</label>
                      <textarea
                        className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                        name="mensaje"
                        rows="5"
                        value={form.mensaje}
                        onChange={manejarCambio}
                      />
                      {errores.mensaje && (
                        <div className="invalid-feedback">{errores.mensaje}</div>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Enviar mensaje
                    </button>
                  </form>
                ) : (
                  <div className="alert alert-success">
                    ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title mb-4">Información de contacto</h2>
                
                <div className="contacto-info">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-geo-alt-fill me-3"></i>
                    <p className="mb-0">Calle 742 de Evergreen Terrace, Springfield</p>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-telephone-fill me-3"></i>
                    <p className="mb-0">047-362-999</p>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-envelope-fill me-3"></i>
                    <p className="mb-0">contacto@disco.stus.cl</p>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-clock-fill me-3"></i>
                    <p className="mb-0">Lunes a Domingo: 22:00 - 05:00</p>
                  </div>
                </div>

                <div className="redes-sociales mt-4">
                  <h3 className="h5 mb-3">Síguenos en redes sociales</h3>
                  <div className="d-flex gap-3">
                    <a href="#" className="btn btn-outline-primary">
                      <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a href="#" className="btn btn-outline-primary">
                      <i className="bi bi-instagram"></i> Instagram
                    </a>
                    <a href="#" className="btn btn-outline-primary">
                      <i className="bi bi-twitter"></i> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13078.333893069586!2d-71.25178335!3d-34.9670471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1746581939068!5m2!1ses!2scl"
                  className="mapa"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto; 