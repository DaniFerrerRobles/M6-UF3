import React from 'react';

const Comentari = ({ticketId}) => {
  const añadirComentario = () => {
    const autor = document.querySelector('#autor').value;
    const comentario = document.querySelector('#comentario').value;
    const fecha = new Date().toLocaleString();

    if (!autor.trim() || !comentario.trim()) return;

    const dades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const actualizados = dades.map(t => {
      if (t.id === ticketId) {
        const nuevos = [...(t.comentarios || []), { autor, comentario, fecha }];
        return { ...t, comentarios: nuevos };
      }
      return t;
    });

    localStorage.setItem('dades_tiquets', JSON.stringify(actualizados));
    document.querySelector('#autor').value = '';
    document.querySelector('#comentario').value = '';

    if (añadirComentario){
        añadirComentario();
    }
  };

  return (
    <div>
      <h4>Afegir Comentari</h4>
      <input id="autor" className="form-control mb-2" placeholder="Autor" />
      <textarea id="comentario" className="form-control mb-2" placeholder="Comentari" />
      <button className="btn btn-primary" onClick={añadirComentario}>Afegir</button>
    </div>
  );
};

export default Comentari;