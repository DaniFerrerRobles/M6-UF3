import React, { useState, useEffect } from 'react';

const Panell = () => {
    const [tiquetsPendents, setTiquetsPendents] = useState([]);

    const [tiquetsResolts, setTiquetsResolts] = useState([]);

    return (
        <div>
            <h2>Tiquets Pendents</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripció</th>
                    </tr>
                </thead>
                <tbody>
                    {tiquetsPendents.map(tiquet => (
                        <tr key={tiquet.id}>
                            <td>{tiquet.id}</td>
                            <td>{tiquet.descripcio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Tiquets Resolts</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripció</th>
                    </tr>
                </thead>
                <tbody>
                    {tiquetsResolts.map(tiquet => (
                        <tr key={tiquet.id}>
                            <td>{tiquet.id}</td>
                            <td>{tiquet.descripcio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Panell;