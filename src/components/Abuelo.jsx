import { useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { Padre } from './Padre';

export function Abuelo() {
    const [usuario, setUsuario] = useState({
        nombre: 'Juan pérez',
        rol: 'Profesor'
    });

    const cambiarNombre = (nuevoNombre) => {
        setUsuario({ ...usuario, nombre: nuevoNombre });
    };

    return (
        <UsuarioContext.Provider value={{ usuario, cambiarNombre }}>
            <div>
                <h3>Componente Abuelo (Nivel 1)</h3>
                <ul>
                    <li>Nombre: {usuario.nombre}</li>
                    <li>Rol: {usuario.rol}</li>
                </ul>
                <p>Aquí se origina el contexto.</p>
                <Padre />
            </div>
        </UsuarioContext.Provider>
    );
}