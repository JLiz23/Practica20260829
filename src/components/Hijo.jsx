import { useContext, useState } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

export function Hijo() {
    // Extraemos los datos directamente sin pasar por el padre
    const { usuario, cambiarNombre } = useContext(UsuarioContext);
    const [inputVal, setInputVal] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (inputVal.trim()) {
            cambiarNombre(inputVal);
            setInputVal('');
        }
    };

    return (
        <div>
            <h3>Componente Hijo (Nivel 3)</h3>
            <p>Datos leídos del contexto:</p>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Rol: {usuario.rol}</li>
            </ul>
            <form onSubmit={manejarEnvio}>
            <input 
            type="text"
            placeholder="Modificar nombre..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}