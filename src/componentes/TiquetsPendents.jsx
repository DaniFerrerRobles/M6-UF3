import React, { useEffect, useState } from 'react';

const TiquetsPendents = () => {
  const [tiquets, setTiquets] = useState([]);

  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const pendents = dades.filter(t => !t.resuelto);
    setTiquets(pendents);
  }, []);

  const marcarComoResuelto = (id) => {
    const actualizados = tiquets.map((tiquet) =>
      tiquet.id === id ? { ...tiquet, resuelto: true, fechaResuelto: new Date().toLocaleDateString() } : tiquet
    );

    const tiquetsTotales = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const nuevosTiquets = tiquetsTotales.map(t =>
      t.id === id ? { ...t, resuelto: true, fechaResuelto: new Date().toLocaleDateString() } : t
    );

    localStorage.setItem('dades_tiquets', JSON.stringify(nuevosTiquets));
    setTiquets(actualizados.filter(t => !t.resuelto));
  };

  return (
    <div>
      <h2>Tiquets Pendientes</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Fecha</th><th>Aula</th><th>Grupo</th><th>Ordenador</th><th>Descripción</th><th>Alumno</th><th>Acción</th>
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
              <td><button onClick={() => marcarComoResuelto(t.id)}>Resolver</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TiquetsPendents;