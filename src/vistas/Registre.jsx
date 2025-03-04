import React, { useState, useEffect } from 'react';

const cargarUsuarios = () => {
  const usuariosGuardados = JSON.parse(localStorage.getItem('dades_usuaris'));
  if (usuariosGuardados) {
    return usuariosGuardados;
  } else {
    return []; 
  }
};

const RegistroUsuarios = () => {
  const [nombre, setNombre] = useState('');
  const [grupo, setGrupo] = useState('');
  const [usuarios, setUsuarios] = useState(cargarUsuarios());
  const [mensaje, setMensaje] = useState('');
  
  const manejarNombre = (event) => {
    setNombre(event.target.value);
  };

  const manejarGrupo = (event) => {
    setGrupo(event.target.value);
  };

  const guardarUsuariosEnLocalStorage = (usuariosActualizados) => {
    localStorage.setItem('dades_usuaris', JSON.stringify(usuariosActualizados));
  };

  const manejarRegistro = (event) => {
    event.preventDefault();
    
    if (nombre && grupo) {
      const nuevoUsuario = { id: Date.now().toString(), nombre, grupo };
      const usuariosActualizados = [...usuarios, nuevoUsuario];

      setUsuarios(usuariosActualizados); 
      guardarUsuariosEnLocalStorage(usuariosActualizados);

      setMensaje(`¡Registro exitoso!`);

      setNombre('');
      setGrupo('');
    } else {
      setMensaje('Rellenar todos los campos.');
    }
  };

  return (
    <div>
      <h2>Registre d'Usuaris</h2>
      <form onSubmit={manejarRegistro}>
        <div>
          <label>Nombre:</label>
          <input 
            type="text" 
            value={nombre} 
            placeholder="Introduce tu nombre" 
            required 
          />
        </div>
        <div>
          <label>Grupo:</label>
          <input 
            type="text" 
            value={grupo} 
            placeholder="Introduce tu grupo" 
            required 
          />
        </div>
        <button type="submit">Registrar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}

      <h3>Usuarios Registrados:</h3>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nombre} - {usuario.grupo}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegistroUsuarios;