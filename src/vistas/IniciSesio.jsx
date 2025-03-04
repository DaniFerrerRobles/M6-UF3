import React, { useState } from 'react';

const IniciSesio = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const usuaris = JSON.parse(localStorage.getItem('dades_usuaris')) || [];

        const usuari = usuaris.find(u => u.email === email && u.password === password);

        if (usuari) {
            localStorage.setItem('sessio_usuari', JSON.stringify({ email: usuari.email }));
            window.location.reload();
        } else {
            setErrorMessage('Usuari o contrasenya incorrectes');
        }
    };

    return (
        <div>
            <h2>Iniciar Sessió</h2>
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Contrasenya" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Iniciar Sessió</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default IniciSesio;