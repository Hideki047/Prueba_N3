import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Tendencias Disco 2025',
      date: '2025-06-01',
      excerpt: 'Descubre qué estilos dominan la pista este año…',
      content: 'Este año, la escena disco está experimentando un renacimiento único. Los peinados afro están volviendo con un toque moderno, ahora con luces LED integradas que parpadean al ritmo de la música. La pista de baile se ha vuelto interactiva, con sensores que crean efectos visuales personalizados según tus movimientos. Y lo más sorprendente: la bola de espejos ahora viene con control de voz, solo necesitas pedirle que cambie de color o velocidad.',
      imagen: '/Imagenes/mr-burns-dance.gif'
    },
    {
      id: 2,
      title: 'Entrevista a DJ Flash',
      date: '2025-05-20',
      excerpt: 'Hablamos con DJ Flash sobre su carrera y sus tips de mezcla…',
      content: "DJ Flash nos revela sus secretos mejor guardados: 'La clave está en la sincronización perfecta entre la música y los efectos visuales. Cuando mezclo Stayin' Alive con efectos de neón, la pista se vuelve loca'. También nos confiesa que su técnica favorita es el 'Disco Drop', donde apaga todas las luces justo antes del drop y las enciende al ritmo. 'Es como un terremoto de diversión', dice entre risas mientras ajusta su icónico peinado que brilla en la oscuridad.",
      imagen: '/Imagenes/disco-stu.gif'
    }
  ];

  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState(
    posts.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
  );
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  function seleccionarPost(post) {
    setSelected(post);
    setNewComment('');
  }

  function volver() {
    setSelected(null);
  }

  function votar() {
    setVotes(prev => ({
      ...prev,
      [selected.id]: prev[selected.id] + 1
    }));
  }

  function manejarEnvioComentario(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setComments(prev => ({
      ...prev,
      [selected.id]: [
        ...(prev[selected.id] || []),
        {
          id: Date.now(),
          texto: newComment.trim(),
          fecha: new Date().toLocaleDateString()
        }
      ]
    }));
    setNewComment('');
  }

  return (
    <div className="pagina-blog">
      <div className="container py-5">
        {!selected ? (
          <div>
            <h1 className="text-center mb-5">Blog de Disco Stu</h1>
            <div className="row g-4">
              {posts.map(post => (
                <div key={post.id} className="col-md-6">
                  <div className="card h-100">
                    <img 
                      src={post.imagen} 
                      className="card-img-top blog-imagen" 
                      alt={post.title} 
                    />
                    <div className="card-body">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="text-muted">
                        <small>{new Date(post.date).toLocaleDateString()}</small>
                      </p>
                      <p className="card-text">{post.excerpt}</p>
                      <button 
                        className="btn btn-primary"
                        onClick={() => seleccionarPost(post)}
                      >
                        Leer más
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="blog-post">
            <button 
              className="btn btn-outline-primary mb-4"
              onClick={volver}
            >
              ← Volver al Blog
            </button>

            <div className="card">
              <img 
                src={selected.imagen} 
                className="card-img-top blog-post-imagen" 
                alt={selected.title} 
              />
              <div className="card-body">
                <h2 className="card-title">{selected.title}</h2>
                <p className="text-muted">
                  <small>{new Date(selected.date).toLocaleDateString()}</small>
                </p>
                <p className="card-text">{selected.content}</p>

                <div className="d-flex align-items-center mb-4">
                  <button 
                    className="btn btn-outline-primary me-3"
                    onClick={votar}
                  >
                    👍 {votes[selected.id]}
                  </button>
                  <span className="text-muted">
                    {votes[selected.id]} me gusta
                  </span>
                </div>

                <div className="comentarios">
                  <h4>Comentarios</h4>
                  {(comments[selected.id] || []).map(comment => (
                    <div key={comment.id} className="comentario mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{comment.fecha}</small>
                      </div>
                      <p className="mb-0">{comment.texto}</p>
                    </div>
                  ))}

                  <form onSubmit={manejarEnvioComentario} className="mt-4">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Escribe un comentario…"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={!newComment.trim()}
                    >
                      Enviar comentario
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog; 