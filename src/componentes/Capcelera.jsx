import React, { useEffect, useState } from 'react';

const BarraNavegacio = () => {
  const [usuariEmail, setUsuariEmail] = useState('');

  useEffect(() => {
    const usuari = JSON.parse(localStorage.getItem('usuari_actual'));
    if (usuari && usuari.email) {
      setUsuariEmail(usuari.email);
    }
  }, []);

  return (
    <nav>
      <h1>GESTION DE INCIDENCIAS</h1>
      {usuariEmail && <p>Bienvenido, {usuariEmail}</p>}
    </nav>
  );
};

export default BarraNavegacio;