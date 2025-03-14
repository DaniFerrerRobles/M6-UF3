import React from 'react';

const IniciSesio = () => {
    const login = () => {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        const usuaris = JSON.parse(localStorage.getItem('dades_usuaris')) || [];
        const usuari = usuaris.find(u => u.email === email && u.password === password);

        if (usuari) {
            localStorage.setItem('sessio_usuari', JSON.stringify({ email: usuari.email }));
            window.location.reload();
        } else {
document.querySelector('#mensajeError').innerHTML = 'Email o contrasenya incorrectes.';   }
    };

    return (
        <div>
            <h2>Iniciar Sessió</h2>
            <input 
                id="email"
                type="email" 
                placeholder="Email" 
            />
            <input 
                id="password"
                type="password" 
                placeholder="Contrasenya" 
            />
            <button onClick={loginogin}>Iniciar Sessió</button>
            <p id="mensajeError"></p>
        </div>
    );
};

export default IniciSesio;