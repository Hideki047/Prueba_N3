import React,{useState,useEffect}from'react';

function Auth(){
  const[form,setForm]=useState({username:'',password:'',email:''});
  const[user,setUser]=useState(JSON.parse(localStorage.getItem('usuario'))||null);
  const[mode,setMode]=useState('login');
  const[error,setError]=useState('');
  const[reservas,setReservas]=useState([]);

  useEffect(()=>{
    if(user){
      const all=JSON.parse(localStorage.getItem('reservas'))||[];
      setReservas(all.filter(r=>r.user===user.username));
    }
  },[user]);

  function handleChange(e){
    const{name,value}=e.target;
    setForm({...form,[name]:value});
  }

  function registro(e){
    e.preventDefault();
    if(!form.username||!form.password||!form.email){
      setError('Todos los campos son obligatorios');
      return;
    }
    localStorage.setItem('user',JSON.stringify(form));
    setError('Registrado ✔️');
    setForm({username:'',password:'',email:''});
  }

  function login(e){
    e.preventDefault();
    const stored=JSON.parse(localStorage.getItem('user'));
    if(stored&&stored.username===form.username&&stored.password===form.password){
      setUser(stored);
      setError('');
      setForm({username:'',password:'',email:''});
    } else {
      setError('Credenciales inválidas');
    }
  }

  function login_out(){
    setUser(null);
    setMode('login');
    setError('');
  }

  function actualizarPerfil(e){
    e.preventDefault();
    if(!form.email){
      setError('Email requerido');
      return;
    }
    const updated={...user,email:form.email};
    localStorage.setItem('user',JSON.stringify(updated));
    setUser(updated);
    setError('Perfil actualizado ✔️');
    setForm(prev=>({...prev,email:''}));
  }

  if(!user){
    return(
      <div>
        <div>
          <button onClick={()=>{setMode('login');setError('')}}>Login</button>
          <button onClick={()=>{setMode('registro');setError('')}}>Registro</button>
        </div>
        {mode==='registro'?
          <form onSubmit={registro}>
            <input name="usuario" placeholder="Usuario" value={form.username} onChange={handleChange}/>
            <input name="contraseña" type="password" placeholder="Contraseña" value={form.password} onChange={handleChange}/>
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
            <button type="submit">Registrarse</button>
          </form>
        :
          <form onSubmit={login}>
            <input name="usuario" placeholder="Usuario" value={form.username} onChange={handleChange}/>
            <input name="contraseña" type="password" placeholder="Contraseña" value={form.password} onChange={handleChange}/>
            <button type="submit">Entrar</button>
          </form>
        }
        {error&&<p>{error}</p>}
      </div>
    );
  }

  return(
    <div>
      <h1>Perfil de {user.username}</h1>
      <p>Email: {user.email}</p>
      <h3>Editar Email</h3>
      <form onSubmit={actualizarPerfil}>
        <input name="email" type="email" placeholder="Nuevo email" value={form.email} onChange={handleChange}/>
        <button type="submit">Actualizar</button>
      </form>
      {error&&<p>{error}</p>}
      <h3>Mis Reservas</h3>
      {reservas.length>0?
        <ul>
          {reservas.map((r,i)=>(
            <li key={i}>{r.evento} - {r.fecha} ({r.tickets} tickets)</li>
          ))}
        </ul>
      :<p>No tienes reservas</p>}
      <button onClick={login_out}>Cerrar sesión</button>
    </div>
  );
}

export default Auth;
