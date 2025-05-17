import React, { useEffect, useState } from 'react';

const GestioUsuaris = () => {
  const [usuaris, setUsuaris] = useState([]);

  useEffect(() => {
    const dades = JSON.parse(localStorage.getItem('dades_usuaris')) || [];
    setUsuaris(dades);
  }, []);

  const canviarRol = (id, nouRol) => {
    const actualitzats = usuaris.map(u => 
      u.id === id ? { ...u, rol: nouRol } : u
    );
    setUsuaris(actualitzats);
    localStorage.setItem('dades_usuaris', JSON.stringify(actualitzats));
  };

  return (
    <main className="container mt-5">
      <h2>Panell Administració Usuaris</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Correu</th>
            <th>Rol</th>
            <th>Canviar Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuaris.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nom}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
              <td>
                <select
                  value={u.rol}
                  onChange={(e) => canviarRol(u.id, e.target.value)}
                  className="form-select"
                >
                  <option value="usuari">Usuari</option>
                  <option value="administrador">Administrador</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default GestioUsuaris;