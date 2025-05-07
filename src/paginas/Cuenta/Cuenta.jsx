import React, { useState } from 'react';
import './Cuenta.css';

function Cuenta() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function manejarEnvio(e) {
    e.preventDefault();
    let errs = {};
    
    if (!formData.nombre.trim()) {
      errs.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Email inválido';
    }
    if (formData.password.length < 6) {
      errs.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrores(errs);
    if (Object.keys(errs).length === 0) {
      setEnviado(true);
    }
  }

  return (
    <div className="pagina-cuenta">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card">
              <div className="card-body p-4">
                <h1 className="text-center mb-4">Mi Cuenta</h1>

                {!enviado ? (
                  <form onSubmit={manejarEnvio}>
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
                      <label className="form-label">Contraseña:</label>
                      <input
                        type="password"
                        className={`form-control ${errores.password ? 'is-invalid' : ''}`}
                        name="password"
                        value={formData.password}
                        onChange={manejarCambio}
                      />
                      {errores.password && (
                        <div className="invalid-feedback">{errores.password}</div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Confirmar Contraseña:</label>
                      <input
                        type="password"
                        className={`form-control ${errores.confirmPassword ? 'is-invalid' : ''}`}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={manejarCambio}
                      />
                      {errores.confirmPassword && (
                        <div className="invalid-feedback">{errores.confirmPassword}</div>
                      )}
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Guardar Cambios
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="alert alert-success">
                    ¡Tu cuenta ha sido actualizada exitosamente!
                  </div>
                )}

                <div className="mt-4">
                  <h3 className="h5 mb-3">Mis Reservas</h3>
                  <div className="list-group">
                    <div className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">Fiesta Retro</h6>
                          <small className="text-muted">30 de Junio, 2025 - 22:00</small>
                        </div>
                        <span className="badge bg-success">Confirmada</span>
                      </div>
                    </div>
                    <div className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">Noche Latina</h6>
                          <small className="text-muted">15 de Julio, 2025 - 21:00</small>
                        </div>
                        <span className="badge bg-warning">Pendiente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuenta; 