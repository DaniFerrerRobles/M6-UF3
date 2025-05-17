import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Panell from '../vistas/Panell';
import RegistroUsuarios from '../vistas/Registre';
import IniciSesio from '../vistas/IniciSesio';
import Logout from '../vistas/CierreSesio';
import GestioUsuaris from '../vistas/GestioUsuaris';

const Menu = () => {
  const usuariActual = JSON.parse(localStorage.getItem('usuari_actual'));
  const estaLogueado = usuariActual !== null;
  const esAdmin = estaLogueado && usuariActual.rol === 'administrador';

  return (
    <Router>
      <div>
        <header>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand">Gestión de incidencias FPLLEFIA</span>

              <div>
                {!estaLogueado && (
                  <>
                    <Link to="/" className="btn btn-secondary ms-2">REGISTRO</Link>
                    <Link to="/iniciSesio" className="btn btn-secondary ms-2">LOGIN</Link>
                  </>
                )}

                {estaLogueado && (
                  <>
                    <Link to="/panell" className="btn btn-secondary ms-2">PANEL</Link>
                    {esAdmin && (
                      <Link to="/gestioUsuaris" className="btn btn-secondary ms-2">GESTIÓN USUARIOS</Link>
                    )}
                    <Link to="/logout" className="btn btn-danger ms-2">CERRAR SESIÓN</Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </header>

        <main className="container mt-4">
          <Routes>
            <Route path="/iniciSesio" element={<IniciSesio />} />
            <Route path="/" element={<RegistroUsuarios />} />
            <Route path="/panell" element={<Panell />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/gestioUsuaris" element={esAdmin ? <GestioUsuaris /> : <Navigate to="/panell"/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Menu;