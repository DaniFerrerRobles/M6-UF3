import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Panell from '../vistas/Panell';
import RegistroUsuarios from '../vistas/Registre';
import IniciSesio from '../vistas/IniciSesio';
import Logout from '../vistas/CierreSesio';

const Menu = () => {
  return (
    <Router>
      <div>
        <header>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand">Gestión de incidencias FPLLEFIA</span>

              <div>
                <Link to="/panell" className="btn btn-secondary ms-2">PANEL</Link>
                <Link to="/iniciSesio" className="btn btn-secondary ms-2">LOGIN</Link>
                <Link to="/registre" className="btn btn-secondary ms-2">REGISTRO</Link>
                <Link to="/logout" className="btn btn-danger ms-2">Cerrar Sesión</Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="container mt-4">
          <Routes>
            <Route path="/iniciSesio" element={<IniciSesio />} />
            <Route path="/registre" element={<RegistroUsuarios />} />
            <Route path="/panell" element={<Panell />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Menu;