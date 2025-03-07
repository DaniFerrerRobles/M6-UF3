import React from 'react';

const Comentarios = () => {
    const añadirComentario = () => {
        const autor = document.querySelector('#autor').value;
        const comentario = document.querySelector('#comentario').value;

        const fecha = new Date().toLocaleString();
        const comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
        
        comentarios.push({ autor, comentario, fecha });

        localStorage.setItem('comentarios', JSON.stringify(comentarios));

        document.querySelector('#autor').value = '';
        document.querySelector('#comentario').value = '';
    };

    return (
        <div>
            <h2>Comentarios</h2>

            <input id="autor" type="text" placeholder="Autor"/>

            <textarea id="comentario" placeholder="Comentario"/>

            <button onClick={añadirComentario}>Afegir Comentari</button>

            <ul>
                {JSON.parse(localStorage.getItem('comentarios'))?.map((comentario, index) => (
                    <li key={index}>
                        <strong>{comentario.autor}</strong> ({comentario.fecha}): {comentario.comentario}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comentarios;