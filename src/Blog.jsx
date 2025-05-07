import React, { useState } from 'react';



function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Tendencias Disco 2025',
      date: '2025-06-01',
      excerpt: 'Descubre qué estilos dominan la pista este año…',
      content: 'Aquí va el contenido completo sobre las últimas tendencias en la música disco y la cultura de club.'
    },
    {
      id: 2,
      title: 'Entrevista a DJ Flash',
      date: '2025-05-20',
      excerpt: 'Hablamos con DJ Flash sobre su carrera y sus tips de mezcla…',
      content: 'Contenido completo de la entrevista, con trucos, anécdotas y consejos para mejorar tu técnica de DJ.'
    }
  ];


  const [selected, setSelected] = useState(null);
  const [votes, setVotes]  = useState(
    posts.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {})
  );
  const [comments, setComments] = useState({});

  const [newComment, setNewComment] = useState('');

  function seleccionar(post) {
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

  function ComentarioSubmit(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments(prev => ({
      ...prev,
      [selected.id]: [
        ...(prev[selected.id] || []),
        newComment.trim()
      ]
    }));
    setNewComment('');
  }

  return (
    <div>

      { !selected ? (

        <div>
          <h1>Blog de Disco Stu</h1>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <small>{post.date}</small>
                <p>{post.excerpt}</p>
                <button onClick={() => seleccionar(post)}>
                  Leer más
                </button>
              </li>
            ))}
          </ul>
        </div>

      ) : (

        <div>
          <button onClick={volver}>
            ← Volver al Blog
          </button>

          <h2>{selected.title}</h2>
          <small>{selected.date}</small>
          <p>{selected.content}</p>

          <div style={{ margin: '16px 0' }}>
            <button onClick={votar}>
              👍 {votes[selected.id]}
            </button>
          </div>

          <h4>Comentarios</h4>
          <ul>
            {(comments[selected.id] || []).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <form onSubmit={ComentarioSubmit}>
            <textarea
              rows="3"
              placeholder="Escribe un comentario…"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />
            <br/>
            <button type="submit">Enviar</button>
          </form>
        </div>

      ) }

    </div>
  );
}

export default Blog;