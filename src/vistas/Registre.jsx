import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistroUsuarios = () => {
  const navigate = useNavigate();

  const manejarRegistro = (event) => {
    event.preventDefault();

    const nom = document.querySelector('#nom').value;
    const email = document.querySelector('#email').value;
    const contrasena = document.querySelector('#contrasena').value;
    const mensaje = document.querySelector('#mensaje');

    if (nom && email && contrasena) {
      const nuevoUsuario = {
        id: Date.now().toString(),
        nom,
        email,
        contrasena,
        rol: 'administrador',
      };

      const usuariosExistentes = JSON.parse(localStorage.getItem('dades_usuaris')) || [];

      const yaRegistrado = usuariosExistentes.some((u) => u.email === email);
      if (yaRegistrado) {
        mensaje.innerHTML = 'Este correo ya existe';
        mensaje.className = 'mt-3 text-center text-danger';
        return;
      }

      usuariosExistentes.push(nuevoUsuario);
      localStorage.setItem('dades_usuaris', JSON.stringify(usuariosExistentes));

      mensaje.innerHTML = 'Registrado correctamente!';
      mensaje.className = 'mt-3 text-center text-success';
  
        navigate('/login');
  
    } else {
      mensaje.innerHTML = 'FALTAN CAMPOS POR RELLENAR';
      mensaje.className = 'mt-3 text-center text-danger';
    }
  };

  return (
    <main className="container mt-5">
      <div className="pt-5">
        <h1 className="w-100 text-center">Registro</h1>
        <form
          onSubmit={manejarRegistro}
          className="form p-4 border shadow mt-5 mx-auto"
          style={{ width: '400px' }}
        >
          <label htmlFor="nom" className="mt-2 form-label">Nombre:</label>
          <input id="nom" type="text" className="form-control" placeholder="Tu nombre" required />

          <label htmlFor="email" className="mt-2 form-label">Email:</label>
          <input id="email" type="email" className="form-control" placeholder="usuario@mail.com" required />

          <label htmlFor="contrasena" className="mt-2 form-label">Contraseña:</label>
          <input id="contrasena" type="password" className="form-control" placeholder="Introduce tu contraseña" required />

          <button type="submit" className="mt-4 w-100 btn btn-primary">Registrar</button>
          <p id="mensaje"></p>
        </form>
      </div>
    </main>
  );
};

export default RegistroUsuarios;