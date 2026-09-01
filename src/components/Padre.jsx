import { Hijo } from './Hijo';

export function Padre() {
    return (
        <div>
            <h2>Componente Padre (Nivel 2)</h2>
            <p>Este componente no sabe nada del contexto ni del usuario.</p>
            <Hijo />
        </div>
    );
}