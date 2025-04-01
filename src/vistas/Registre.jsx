import React from 'react';

const RegistroUsuarios = () => {
  const manejarRegistro = (event) => {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;  
    const grupo = document.querySelector('#grupo').value;    
    const mensaje = document.querySelector('#mensaje');

    if (nombre && grupo) {
      const nuevoUsuario = { id: Date.now().toString(), nombre, grupo };
      mensaje.innerHTML = '¡Registrado correctamente!';

      document.querySelector('#nombre').value = '';
      document.querySelector('#grupo').value = '';
    } else {
      mensaje.innerHTML = 'Hay campos vacíos';
    }
  };

  return (
    <div>
      <h2>Registre d'Usuaris</h2>
      <form onSubmit={manejarRegistro}>
        <div>
          <label>Nom:</label>
          <input 
            id="nombre"
            type="text" 
            placeholder="Introduce tu nombre" 
            required 
          />
        </div>
        <div>
          <label>Grupo:</label>
          <input 
            id="grupo"
            type="text" 
            placeholder="Introduce tu grupo" 
            required 
          />
        </div>
        <button type="submit">Registrar</button>
      </form>

      <p id="mensaje"></p>
    </div>
  );
};

export default RegistroUsuarios;