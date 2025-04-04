import React, { useState } from 'react';

const IniciSesio = () => {
  const [mensaje, setMensaje] = useState('');

  const login = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const usuaris = JSON.parse(localStorage.getItem('dades_usuaris')) || [];
    const usuari = usuaris.find(usuari => usuari.email === email && usuari.password === password);

    if (usuari) {
      localStorage.setItem(JSON.stringify({ email: usuari.email }));
      setMensaje('Iniciaste sesión correctamente.');
    } else {
      setMensaje('Correo/contraseña incorrecto.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sessió</h2>
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Contraseña" />
      <button onClick={login}>Iniciar Sessió</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default IniciSesio;