import React from 'react';

const RegistroUsuarios = () => {
  const manejarRegistro = (event) => {
    event.preventDefault(); // ¡Importante para evitar recargar la página!

    const nombre = document.querySelector('#nombre').value;
    const grupo = document.querySelector('#grupo').value;
    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#contraseña').value;
    const mensaje = document.querySelector('#mensaje');

    if (nombre && grupo && email && contraseña) {
      const nuevoUsuario = { 
        id: Date.now().toString(), 
        nombre, 
        grupo, 
        email, 
        password: contraseña
      };

      const usuariosExistentes = JSON.parse(localStorage.getItem('dades_usuaris')) || [];

      const yaRegistrado = usuariosExistentes.some(u => u.email === email);
      if (yaRegistrado) {
        mensaje.innerHTML = 'Este correo ya está registrado.';
        return;
      }

      usuariosExistentes.push(nuevoUsuario);
      localStorage.setItem('dades_usuaris', JSON.stringify(usuariosExistentes));

      mensaje.innerHTML = 'Registrado!';
    } else {
      mensaje.innerHTML = 'FALTAN CAMPOS POR RELLENAR';
    }
  };

  return (
    <div>
      <h2>Registre d'Usuaris</h2>
      <form onSubmit={manejarRegistro}>
        <div>
          <label>Nom:</label>
          <input id="nombre" type="text" placeholder="Introduce tu nombre" required />
        </div>
        <div>
          <label>Grupo:</label>
          <input id="grupo" type="text" placeholder="Introduce tu grupo" required />
        </div>
        <div>
          <label>Email:</label>
          <input id="email" type="email" placeholder="Introduce tu email" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input id="contraseña" type="password" placeholder="Introduce tu contraseña" required />
        </div>
        <button type="submit">Registrar</button>
      </form>

      <p id="mensaje"></p>
    </div>
  );
};

export default RegistroUsuarios;