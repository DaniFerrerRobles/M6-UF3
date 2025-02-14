import React, { useState, useEffect } from 'react';

const Panell = () => {
    const [tiquetsPendents, setTiquetsPendents] = useState([
        {
            id: '123459',
            fecha: '18/04/2023',
            aula: 'T6',
            grupo: 'DAW1',
            ordenador: 'PC3',
            descripcio: 'Error de impresora',
            alumne: 'Ana Martínez'
        },
        {
            id: '123460',
            fecha: '19/04/2023',
            aula: 'T8',
            grupo: 'DAW2',
            ordenador: 'PC4',
            descripcio: 'Problema de acceso a archivos',
            alumne: 'Pedro Gómez'
        },
        {
            id: '123461',
            fecha: '20/04/2023',
            aula: 'T6',
            grupo: 'DAW1',
            ordenador: 'PC1',
            descripcio: 'Aplicación se cierra inesperadamente',
            alumne: 'Sofía Fernández'
        },
        {
            id: '123462',
            fecha: '21/04/2023',
            aula: 'T7',
            grupo: 'DAW2',
            ordenador: 'PC2',
            descripcio: 'Problema de conexión a la red',
            alumne: 'Luis Torres'
        },
        {
            id: '123463',
            fecha: '22/04/2023',
            aula: 'T8',
            grupo: 'DAW1',
            ordenador: 'PC3',
            descripcio: 'Archivos corruptos',
            alumne: 'Carolina Ramírez'
        }
    ]);

    const [tiquetsResolts, setTiquetsResolts] = useState([
        {
            id: '123457',
            fecha: '16/04/2023',
            fechaResolt: '15/05/2023',
            aula: 'T7',
            grupo: 'DAW2',
            ordenador: 'PC1',
            descripcio: 'Problema de conexión a Internet',
            alumne: 'Maria López'
        },
        {
            id: '123458',
            fecha: '17/04/2023',
            fechaResolt: '15/05/2023',
            aula: 'T8',
            grupo: 'DAW1',
            ordenador: 'PC2',
            descripcio: 'Pantalla en blanco',
            alumne: 'Juan Rodríguez'
        },
        {
            id: '123459',
            fecha: '18/04/2023',
            fechaResolt: '15/05/2023',
            aula: 'T8',
            grupo: 'DAW1',
            ordenador: 'PC3',
            descripcio: 'Error de impresora',
            alumne: 'Ana Martínez'
        }
    ]);
    
    return (
        <div>
            <h2>Tiquets Pendents</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripció</th>
                        <th>Alumne</th>
                    </tr>
                </thead>
                <tbody>
                    {tiquetsPendents.map(tiquet => (
                        <tr key={tiquet.id}>
                            <td>{tiquet.id}</td>
                            <td>{tiquet.fecha}</td>
                            <td>{tiquet.aula}</td>
                            <td>{tiquet.grupo}</td>
                            <td>{tiquet.ordenador}</td>
                            <td>{tiquet.descripcio}</td>
                            <td>{tiquet.alumne}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Tiquets Resolts</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Fecha Resolt</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripció</th>
                        <th>Alumne</th>
                    </tr>
                </thead>
                <tbody>
                    {tiquetsResolts.map(tiquet => (
                        <tr key={tiquet.id}>
                            <td>{tiquet.id}</td>
                            <td>{tiquet.fecha}</td>
                            <td>{tiquet.fechaResolt}</td>
                            <td>{tiquet.aula}</td>
                            <td>{tiquet.grupo}</td>
                            <td>{tiquet.ordenador}</td>
                            <td>{tiquet.descripcio}</td>
                            <td>{tiquet.alumne}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Panell;