// GestioUsuaris.js
import React, { useState } from 'react';
import Panel from '../vistas/Panell';

const dades_Usuaris = [
  { id: 1, nom: 'Juan Pérez', rol: 'admin', permisos: ['crear', 'editar', 'eliminar'] },
  { id: 2, nom: 'Maria Gómez', rol: 'editor', permisos: ['editar'] },
  { id: 3, nom: 'Pedro López', rol: 'lector', permisos: ['visualitzar'] },
];

const GestioUsuaris = () => {
  const [usuaris, setUsuaris] = useState(dades_Usuaris);

  const actualitzarRol = (id, nouRol) => {
    setUsuaris(usuaris =>
      usuaris.map(usuari =>
        usuari.id === id ? { ...usuari, rol: nouRol, permisos: obtenirPermisos(nouRol) } : usuari
      )
    );
  };

  const obtenirPermisos = (rol) => {
    switch (rol) {
      case 'admin':
        return ['crear', 'editar', 'eliminar'];
      case 'editor':
        return ['editar'];
      case 'lector':
        return ['visualitzar'];
      default:
        return [];
    }
  };

  return (
    <div>
      <h1>Gestió d'Usuaris</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Rol</th>
            <th>Permisos</th>
            <th>Accions</th>
          </tr>
        </thead>
        <tbody>
          {usuaris.map((usuari) => (
            <tr key={usuari.id}>
              <td>{usuari.nom}</td>
              <td>
                <select
                  value={usuari.rol}
                  onChange={(e) => actualitzarRol(usuari.id, e.nouRol.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="lector">Lector</option>
                </select>
              </td>
              <td>
              <button onClick={() => alert(`Permisos per ${usuari.nom}: ${usuari.permisos}`)}>Mostrar permisos</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GestioUsuaris;