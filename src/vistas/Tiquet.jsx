import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Tiquet = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTiquet({ ...tiquet, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tiquets = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    if (tiquet.id) {
      // Actualizar tiquet
      const index = tiquets.findIndex((t) => t.id === tiquet.id);
      tiquets[index] = tiquet;
    } else {
      // Crear nuevo tiquet
      tiquet.id = Date.now().toString(); // Generamos un ID único
      tiquets.push(tiquet);
    }
    localStorage.setItem('dades_tiquets', JSON.stringify(tiquets));
    navigate('/');  // Usamos navigate para redirigir
  };

  return (
    <div>
      <h2>{tiquet.id ? 'Editar Tiquet' : 'Nuevo Tiquet'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={tiquet.id}
            onChange={handleChange}
            disabled
          />
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={tiquet.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Aula</label>
          <input
            type="text"
            name="aula"
            value={tiquet.aula}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Grupo</label>
          <input
            type="text"
            name="grupo"
            value={tiquet.grupo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ordenador</label>
          <input
            type="text"
            name="ordenador"
            value={tiquet.ordenador}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="descripcion"
            value={tiquet.descripcion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alumno</label>
          <input
            type="text"
            name="alumno"
            value={tiquet.alumno}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Tiquet;