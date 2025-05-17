import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Comentari from './Comentari';
import Comentaris from './Comentaris';

const TiquetsPendents = () => {
  const [tiquets, setTiquets] = useState([]);
  const [mostrarComentari, setMostrarComentari] = useState(null);
  const [mostrarComentaris, setMostrarComentaris] = useState(null);

  const usuari = JSON.parse(localStorage.getItem('usuari_actual'));
  const esAdmin = usuari.rol === 'administrador';

  useEffect(() => {
    const dadesGuardades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];

    if (dadesGuardades.length === 0) {
      const ejemplo = [
        {
          id: 1,
          fecha: new Date().toLocaleDateString(),
          aula: "Aula 101",
          grupo: "1º DAW",
          ordenador: "PC-05",
          descripcion: "No enciende la pantalla.",
          alumno: "Juan Pérez",
          resuelto: false,
          comentarios: []
        },
      ];
      localStorage.setItem('dades_tiquets', JSON.stringify(ejemplo));
      setTiquets(ejemplo);
    } else {
      const pendents = dadesGuardades.filter(t => !t.resuelto);
      setTiquets(pendents);
    }
  }, []);

  const marcarResuelto = (id) => {
    const actualizados = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const nuevos = actualizados.map(t => {
      if (t.id === id) {
        return { ...t, resuelto: true, fechaResuelto: new Date().toLocaleDateString() };
      }
      return t;
    });

    localStorage.setItem('dades_tiquets', JSON.stringify(nuevos));
    setTiquets(nuevos.filter(t => !t.resuelto));
  };

  const eliminarTiquet = (id) => {
    if (!esAdmin) return;
    const datosActuales = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const nuevosDatos = datosActuales.filter(t => t.id !== id);
    localStorage.setItem('dades_tiquets', JSON.stringify(nuevosDatos));
    setTiquets(nuevosDatos.filter(t => !t.resuelto));
  };

  return (
    <main className="container mt-5">
      <h2>Tickets pendientes</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th>Resolver</th>
            <th>Comentario</th>
            <th>Ver</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tiquets.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.fecha}</td>
              <td>{t.aula}</td>
              <td>{t.grupo}</td>
              <td>{t.ordenador}</td>
              <td>{t.descripcion}</td>
              <td>{t.alumno}</td>
              <td>
                <button className="btn btn-success" onClick={() => marcarResuelto(t.id)} title="Resolver ticket">
                  Resolver
                </button>
              </td>
              <td>
                <button className="btn btn-warning" title="Añadir comentario" onClick={() => setMostrarComentari(t.id)}>
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
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

      {mostrarComentari && (
        <div className="mt-4">
          <h4>Añadir comentario al ticket {mostrarComentari}</h4>
          <Comentari ticketId={mostrarComentari} />
        </div>
      )}

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

export default TiquetsPendents;