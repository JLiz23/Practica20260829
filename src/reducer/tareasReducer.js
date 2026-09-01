// Estado inicial centralizado
export const estadoInicialTareas = [
    { id: 1, texto: 'Estudiar useContext' },
    { id: 2, texto: 'Estudiar useReducer' }
];

// Función reducer pura que determina el próximo estado
export function tareasReducer(state, action) {
    switch (action.type) {
        case 'AGREGAR_TAREA':
            return [...state, { id: Date.now(), texto: action.payload }];

            case 'ELIMINAR_TAREA':
                return state.filter(tarea => tarea.id !== action.payload);

                default:
                    return state;

    }
}