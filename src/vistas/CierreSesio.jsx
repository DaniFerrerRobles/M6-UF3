import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('usuari_actual');
    
    navigate('/inicisesio');
  }, [navigate]);

  return (
    <div className="container mt-5 text-center">
      <h2>SESION CERRADA!</h2>
    </div>
  );
};

export default Logout;