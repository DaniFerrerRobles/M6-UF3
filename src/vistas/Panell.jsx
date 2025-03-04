import React, { useState, useEffect } from 'react';

const cargarTiquets = () => {
  const tiquetsGuardados = JSON.parse(localStorage.getItem('dades_tiquets'));
  if (tiquetsGuardados) {
    return tiquetsGuardados;
  } else {
    return [
      {
        id: '123459',
        fecha: '18/04/2023',
        aula: 'T6',
        grupo: 'DAW1',
        ordenador: 'PC3',
        descripcio: 'Error de impresora',
        alumne: 'Ana Martínez',
        resuelto: false,
        fechaResolt: null,
      },
      {
        id: '123460',
        fecha: '19/04/2023',
        aula: 'T8',
        grupo: 'DAW2',
        ordenador: 'PC4',
        descripcio: 'Problema de acceso a archivos',
        alumne: 'Pedro Gómez',
        resuelto: false,
        fechaResolt: null,
      },
    ];
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

const Panell = () => {
  const [tiquets, setTiquets] = useState(cargarTiquets);
  const [usuarios, setUsuarios] = useState(cargarUsuarios);

  const guardarEnLocalStorage = () => {
    localStorage.setItem('dades_tiquets', JSON.stringify(tiquets));
    localStorage.setItem('dades_usuaris', JSON.stringify(usuarios));
  };

  const marcarComoResuelto = (id) => {
    const tiquetsActualizados = tiquets.map((tiquet) => {
      if (tiquet.id === id && !tiquet.resuelto) {
        return {
          ...tiquet,
          resuelto: true,
          fechaResolt: new Date().toLocaleDateString(),
        };
      }
      return tiquet;
    });

    setTiquets(tiquetsActualizados);
    guardarEnLocalStorage();
  };

  const tiquetsPendientes = tiquets.filter((tiquet) => !tiquet.resuelto);
  const tiquetsResueltos = tiquets.filter((tiquet) => tiquet.resuelto);

  return (
    <div>
      <h2>Tiquets Pendents</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripció</th>
            <th>Alumne</th>
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
              <td>{tiquet.descripcio}</td>
              <td>{tiquet.alumne}</td>
              <td>
                <button onClick={() => marcarComoResuelto(tiquet.id)}>
                  Marcar como Resuelto
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Tiquets Resolts</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Fecha Resolt</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripció</th>
            <th>Alumne</th>
          </tr>
        </thead>
        <tbody>
          {tiquetsResueltos.map((tiquet) => (
            <tr key={tiquet.id}>
              <td>{tiquet.id}</td>
              <td>{tiquet.fecha}</td>
              <td>{tiquet.fechaResolt}</td>
              <td>{tiquet.aula}</td>
              <td>{tiquet.grupo}</td>
              <td>{tiquet.ordenador}</td>
              <td>{tiquet.descripcio}</td>
              <td>{tiquet.alumne}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Panell;