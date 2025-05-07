import React, { useState } from 'react';

function Galeria() {
  const fotos = [
    { id: 1, src: null, evento: 'Retro', año: 2025, tipo: 'Concierto' },
    { id: 2, src: null, evento: 'Latina', año: 2025, tipo: 'Fiesta' },
    { id: 3, src: null, evento: 'Retro', año: 2024, tipo: 'Concierto' },
    { id: 4, src: null, evento: 'Electrónica', año: 2025, tipo: 'Club' },
    // … más fotos
  ];

  const [filtro, setFiltro] = useState({
    evento: '',
    año: '',
    tipo: ''
  });

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFiltro(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const fotosFiltradas = fotos.filter(foto => {
    return (
      ( !filtro.evento || foto.evento === filtro.evento ) &&
      ( !filtro.año    || String(foto.año) === filtro.año ) &&
      ( !filtro.tipo   || foto.tipo === filtro.tipo )
    );
  });

  return (
    <div>

      <h1>Galería de Fotos</h1>


      <div className="filtros">
        <label>
          Evento:
          <select 
            name="evento" 
            value={filtro.evento} 
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="Retro">Retro</option>
            <option value="Latina">Latina</option>
            <option value="Electrónica">Electrónica</option>
          </select>
        </label>

        <label>
          Año:
          <select 
            name="año" 
            value={filtro.año} 
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </label>

        <label>
          Tipo:
          <select 
            name="tipo" 
            value={filtro.tipo} 
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            <option value="Concierto">Concierto</option>
            <option value="Fiesta">Fiesta</option>
            <option value="Club">Club</option>
          </select>
        </label>
      </div>


      <div className="galeria-grid">
        { fotosFiltradas.map(foto => (
          <div key={foto.id} className="galeria-item" onClick={() => alert('Abrir imagen')}>
            {/* aquí debe ir [imagen] */}
            <p>{ foto.evento } - { foto.año }</p>
          </div>
        )) }
      </div>

    </div>
  );
}

export default Galeria;
