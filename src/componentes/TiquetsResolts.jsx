import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Comentaris from './Comentaris';

const TiquetsResolts = () => {
  const [tiquets, setTiquets] = useState([]);
  const [mostrarComentaris, setMostrarComentaris] = useState(null);

  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const resueltos = dades.filter(t => t.resuelto);
    setTiquets(resueltos);
  }, []);

  const eliminarTiquet = (id) => {
    const datosActuales = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const nuevosDatos = datosActuales.filter(t => t.id !== id);
    localStorage.setItem('dades_tiquets', JSON.stringify(nuevosDatos));
    setTiquets(nuevosDatos.filter(t => t.resuelto));
  };

  const verComentarios = (id) => {
    setMostrarComentaris(mostrarComentaris === id ? null : id);
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
            <React.Fragment key={t.id}>
              <tr>
                <td>{t.id}</td>
                <td>{t.fecha}</td>
                <td>{t.fechaResuelto}</td>
                <td>{t.aula}</td>
                <td>{t.grupo}</td>
                <td>{t.ordenador}</td>
                <td>{t.descripcion}</td>
                <td>{t.alumno}</td>
                <td>
                  <button className="btn btn-info" title="Ver comentarios" onClick={() => verComentarios(t.id)}>
                    <i className="bi bi-chat-left-text"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" title="Eliminar ticket" onClick={() => eliminarTiquet(t.id)}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
              {mostrarComentaris === t.id && (
                <tr>
                  <td colSpan="10">
                    <Comentaris ticketId={t.id} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TiquetsResolts;