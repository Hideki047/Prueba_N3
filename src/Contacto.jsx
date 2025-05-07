
import React, { useState } from "react";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function cambios(e) {
    const { name: nombre, value } = e.target;
    setForm((prev) => ({ ...prev, [nombre]: value }));
  }

  function submit(e) {
    e.preventDefault();
    let errs = {};
    if (!form.nombre.trim()) errs.nombre = "Requerido";
    if (!form.email.trim() || !form.email.includes("@"))
      errs.email = "Email inválido";
    if (!form.mensaje.trim()) errs.mensaje = "Requerido";
    setErrores(errs);
    if (!Object.keys(errs).length) setEnviado(true);
  }

  return (
    <div style={{ display: "flex", gap: "100px", justifyContent: "center" }}>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13078.333893069586!2d-71.25178335!3d-34.9670471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1746581939068!5m2!1ses!2scl"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="infoContainer">
        {!enviado ? (
          <form
            onSubmit={submit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              gap: "5px",
              border: "solid white",
              borderRadius: "2px",
              height: "10vh,",
            }}
          >
            <div className="inputContacto">
              <label>Nombre:</label>
              <input name="nombre" value={form.nombre} onChange={cambios} />
              {errores.nombre && <span>{errores.nombre}</span>}
            </div>

            <div className="inputContacto">
              <label>Email:</label>
              <input name="email" value={form.email} onChange={cambios} />
              {errores.email && <span>{errores.email}</span>}
            </div>

            <div className="inputContacto">
              <label>Mensaje:</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={cambios}
              />
              {errores.mensaje && <span>{errores.mensaje}</span>}
            </div>

            <button type="submit">Enviar</button>
          </form>
        ) : (
          <p>Gracias por tu mensaje</p>
        )}
        <h1>Contacto</h1>
        <p>Dirección: Calle 742 de Evergreen Terrace, Springfield</p>
        <p>Telefono: 047-362-999</p>
        <p>Email: contacto@disco.stus.cl</p>
        <p>
          Redes: <a href="#">Facebook</a> <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </p>
      </div>
    </div>
  );
}
export default Contacto;
