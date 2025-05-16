import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Comentarios from './comentaris';
const cargarTiquets = () => {
  const tiquetsGuardados = JSON.parse(localStorage.getItem('dades_tiquets'));
  if (tiquetsGuardados) {
    return tiquetsGuardados;
  } else {
    return [];
  }
};

const cargarUsuarios = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('dades_usuaris'));
  if (usuariosGuardados) {
    return usuariosGuardados;
  } else {
    return [
      { id: '1', nombre: 'Ana Martínez', grupo: 'DAW1' },
      { id: '2', nombre: 'Pedro Gómez', grupo: 'DAW2' },
    ];
  }
};

const Panel = () => {
  const [tiquets, setTiquets] = useState(cargarTiquets);
  const [usuarios, setUsuarios] = useState(cargarUsuarios);

  const guardarEnSesion = () => {
    localStorage.setItem('dades_tiquets', JSON.stringify(tiquets));
    localStorage.setItem('dades_usuaris', JSON.stringify(usuarios));
  };

  const marcarComoResuelto = (id) => {
    const tiquetsActualizados = tiquets.map((tiquet) => {
      if (tiquet.id === id && !tiquet.resuelto) {
        return {
          ...tiquet,
          resuelto: true,
          fechaResuelto: new Date().toLocaleDateString(),
        };
      }
      return tiquet;
    });

    setTiquets(tiquetsActualizados);
    guardarEnSesion();
  };

  const tiquetsPendientes = tiquets.filter((tiquet) => !tiquet.resuelto);
  const tiquetsResueltos = tiquets.filter((tiquet) => tiquet.resuelto);

  return (
    <div>
      <h2>Tiquets Pendientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {tiquetsPendientes.map((tiquet) => (
            <tr key={tiquet.id}>
              <td>{tiquet.id}</td>
              <td>{tiquet.fecha}</td>
              <td>{tiquet.aula}</td>
              <td>{tiquet.grupo}</td>
              <td>{tiquet.ordenador}</td>
              <td>{tiquet.descripcion}</td>
              <td>{tiquet.alumno}</td>
              <td>
                <button onClick={() => marcarComoResuelto(tiquet.id)}>
                  Marcar como Resuelto
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Tiquets Resueltos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Fecha Resuelto</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
          </tr>
        </thead>
        <tbody>
          {tiquetsResueltos.map((tiquet) => (
            <tr key={tiquet.id}>
              <td>{tiquet.id}</td>
              <td>{tiquet.fecha}</td>
              <td>{tiquet.fechaResuelto}</td>
              <td>{tiquet.aula}</td>
              <td>{tiquet.grupo}</td>
              <td>{tiquet.ordenador}</td>
              <td>{tiquet.descripcion}</td>
              <td>{tiquet.alumno}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Comentarios />

    </div>
  );
};

export default Panel;