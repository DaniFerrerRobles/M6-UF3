import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Comentaris from './Comentaris';

const TiquetsResolts = () => {
  const [tiquets, setTiquets] = useState([]);
  const [mostrarComentaris, setMostrarComentaris] = useState(null);
  const usuari = JSON.parse(localStorage.getItem('usuari_actual'));
  const esAdmin = usuari.rol === 'administrador';
  
  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const resueltos = dades.filter(t => t.resuelto);
    setTiquets(resueltos);
  }, []);

  const eliminarTiquet = (id) => {
    if (!esAdmin) return;
    const datosActuales = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const nuevosDatos = datosActuales.filter(t => t.id !== id);
    localStorage.setItem('dades_tiquets', JSON.stringify(nuevosDatos));
    setTiquets(nuevosDatos.filter(t => t.resuelto));
  };

  return (
    <main className="container mt-5">
      <h2>Tickets resueltos</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Fecha resuelto</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th>Ver comentarios</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tiquets.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.fecha}</td>
              <td>{t.fechaResuelto}</td>
              <td>{t.aula}</td>
              <td>{t.grupo}</td>
              <td>{t.ordenador}</td>
              <td>{t.descripcion}</td>
              <td>{t.alumno}</td>
              <td>
                <button className="btn btn-info" title="Ver comentarios" onClick={() => setMostrarComentaris(t.id)}>
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title={esAdmin ? "Eliminar ticket" : "Solo el administrador puede eliminar"} onClick={() => eliminarTiquet(t.id)} disabled={!esAdmin}>
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {mostrarComentaris && (
        <div className="mt-4">
          <h4>Comentarios del ticket {mostrarComentaris}</h4>
          <Comentaris ticketId={mostrarComentaris} />
          <button className="btn btn-secondary mt-2" onClick={() => setMostrarComentaris(null)}>Cerrar</button>
        </div>
      )}
    </main>
  );
};

export default TiquetsResolts;