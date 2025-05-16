import React, { useEffect, useState } from 'react';

const TiquetsResolts = () => {
  const [tiquets, setTiquets] = useState([]);

  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    const resolts = dades.filter(t => t.resuelto);
    setTiquets(resolts);
  }, []);

  return (
    <div>
      <h2>Tiquets Resueltos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th><th>Fecha</th><th>Fecha Resuelto</th><th>Aula</th><th>Grupo</th><th>Ordenador</th><th>Descripción</th><th>Alumno</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TiquetsResolts;