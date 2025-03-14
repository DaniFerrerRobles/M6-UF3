import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Tiquet = () => {
  const navegar = useNavegar();
  const ubicacion = useUbicacion();
  const [tiquet, setTiquet] = useState({
    id: '',
    fecha: '',
    aula: '',
    grupo: '',
    ordenador: '',
    descripcion: '',
    alumno: '',
    resuelto: false,
    fechaResuelto: null,
  });

  const tiquetId = new URLSearchParams(location.search).get('id');  // Obtenemos el ID si se está editando

  useEffect(() => {
    if (tiquetId) {
      const tiquets = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
      const tiquetEditado = tiquets.find((t) => t.id === tiquetId);
      if (tiquetEditado) {
        setTiquet(tiquetEditado);
      }
    }
  }, [tiquetId]);

  const gestionTiquets = (e) => {
    e.preventDefault();
    const tiquets = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    if (tiquet.id) {
      const index = tiquets.findIndex((t) => t.id === tiquet.id);
      tiquets[index] = tiquet;
    } else {
      tiquet.id = Date.now().toString();
      tiquets.push(tiquet);
    }
    localStorage.setItem('dades_tiquets', JSON.stringify(tiquets));
    navigate('/');
  };

  return (
    <div>
      <h2>{tiquet.id ? 'Editar Tiquet' : 'Nuevo Tiquet'}</h2>
      <form onSubmit={gestionTiquets}>
        <div>
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={tiquet.id}
            onChange={i}
            disabled
          />
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={tiquet.fecha}
            onChange={i}
          />
        </div>
        <div>
          <label>Aula</label>
          <input
            type="text"
            name="aula"
            value={tiquet.aula}
            onChange={i}
          />
        </div>
        <div>
          <label>Grupo</label>
          <input
            type="text"
            name="grupo"
            value={tiquet.grupo}
            onChange={i}
          />
        </div>
        <div>
          <label>Ordenador</label>
          <input
            type="text"
            name="ordenador"
            value={tiquet.ordenador}
            onChange={i}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={tiquet.descripcion}
            onChange={i}
          />
        </div>
        <div>
          <label>Alumno</label>
          <input
            type="text"
            name="alumno"
            value={tiquet.alumno}
            onChange={i}
          />
        </div>
        <button type="submit">Añadir Tiquet</button>
      </form>
    </div>
  );
};

export default Tiquet;