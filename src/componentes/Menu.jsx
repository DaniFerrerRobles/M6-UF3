import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Panell from '../vistas/Panell';
import RegistroUsuarios from '../vistas/Registre';
import IniciSesio from '../vistas/IniciSesio';

const Menu = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/inicisesio">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link to="/registre">Regístrarse</Link>
                        </li>
                        <li>
                            <Link to="/panell">Panel</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/iniciSesio" element={<IniciSesio />} />
                    <Route path="/Registre" element={<RegistroUsuarios />} />
                    <Route path="/Panell" element={<Panell />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Menu;