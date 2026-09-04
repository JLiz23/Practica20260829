import { useReducer, useState } from 'react';
import { tareasReducer, estadoInicialTareas } from '../reducer/tareasReducer';

export function ListaTareas() {
    const [state, dispatch] = useReducer(tareasReducer, estadoInicialTareas);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregar = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
        dispatch({ type: 'AGREGAR_TAREA', payload: nuevaTarea });
        setNuevaTarea('');
    }
};

    return (
        <div>
            <h3>Sección useReducer: Lista de Tareas</h3>

            <form onSubmit={agregar}>
                <input
                    type="text"
                    placeholder="Nueva tarea..."
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                />
                <button type="submit">Añadir</button>
            </form>
            <ul>
                {state.map(tarea => (
                    <li key={tarea.id}>
                        {tarea.texto}{''}
                        <button onClick={() => dispatch({ type: 'ELIMINAR_TAREA', payload: tarea.id })}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}