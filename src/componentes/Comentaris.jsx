import React, { useEffect, useState } from 'react';

const Comentaris = ({ ticketId }) => {
  const [comentaris, setComentaris] = useState([]);

  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const ticket = dades.find(t => t.id === ticketId);
    setComentaris(ticket.comentarios || []);
  }, [ticketId]);

  return (
    <div>
      <h4>Comentaris</h4>
      <ul className="list-group">
        {comentaris.map((c, i) => (
          <li key={i} className="list-group-item">
            <strong>{c.autor}</strong> ({c.fecha}): {c.comentario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comentaris;