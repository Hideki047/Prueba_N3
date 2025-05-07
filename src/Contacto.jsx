import React,{useState}from'react';

function Contacto(){
    
  const[form,setForm]=useState({nombre:'', email:'', mensaje:''});
  const[errores,setErrores]=useState({});
  const[enviado,setEnviado]=useState(false);

  function cambios(e){
    const{name: nombre,value}=e.target;
    setForm(prev=>({...prev,[nombre]:value}));
  }

  function submit(e){
    e.preventDefault();
    let errs = {};
    if(!form.nombre.trim())errs.nombre = 'Requerido';
    if(!form.email.trim()||!form.email.includes('@'))errs.email = 'Email inválido';
    if(!form.mensaje.trim())errs.mensaje = 'Requerido';
    setErrores(errs);
    if(!Object.keys(errs).length)setEnviado(true);
  }

  return(
    <div>
      <h1>Contacto</h1>
      <p>Dirección: Calle 742 de Evergreen Terrace, Springfield</p>
      <p>Telefono: 047-362-999</p>
      <p>Email: contacto@disco.stus.cl</p>
      <p>Redes: <a href="#">Facebook</a> <a href="#">Instagram</a></p>
      
      {!enviado?
        <form onSubmit={submit}>

          <div>
            <label>Nombre:</label>
            <input name="nombre" value={form.nombre} onChange={cambios}/>
            {errores.nombre&&<span>{errores.nombre}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input name="email" value={form.email} onChange={cambios}/>
            {errores.email&&<span>{errores.email}</span>}
          </div>

          <div>
            <label>Mensaje:</label>
            <textarea name="mensaje" value={form.mensaje} onChange={cambios}/>
            {errores.mensaje&&<span>{errores.mensaje}</span>}
          </div>

          <button type="submit">Enviar</button>
          
        </form>
      : <p>Gracias por tu mensaje</p>}
    </div>
  );
}
export default Contacto;
