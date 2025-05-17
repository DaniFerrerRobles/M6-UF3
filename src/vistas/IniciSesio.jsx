import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IniciSesio = () => {
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const usuaris = JSON.parse(localStorage.getItem('dades_usuaris')) || [];
    const usuari = usuaris.find(
      (u) => u.email === email && u.contrasena === password
    );

    if (usuari) {
      localStorage.setItem('usuari_actual', JSON.stringify({ email: usuari.email, rol: usuari.rol }));
      setMensaje('Sesión iniciada correctamente.');
      setColor('text-success');
      
      setTimeout(() => {
        navigate('/panell');
      }, 2000);
    } else {
      setMensaje('Correo o contraseña incorrectos');
      setColor('text-danger');
    }
  };

  return (
    <main className="container mt-5">
      <div className="pt-5">
        <h1 className="w-100 text-center">Login</h1>
        <form
          onSubmit={login}
          className="form p-4 border shadow mt-5 mx-auto"
          style={{ width: '400px' }}
        >
          <label htmlFor="email" className="mt-2 form-label">User:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="usuario@mail.com"
            required
          />

          <label htmlFor="password" className="mt-2 form-label">Contraseña:</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Introduce tu contraseña"
            required
          />

          <button type="submit" className="mt-4 w-100 btn btn-primary">Entrar</button>

          <p className={`mt-3 text-center ${color}`}>{mensaje}</p>
        </form>
      </div>
    </main>
  );
};

export default IniciSesio;