import { Abuelo } from './components/Abuelo';
import { ListaTareas } from './components/ListaTareas';


function App() {
  return (
      <div>
        <h1>Practica 20260829</h1>
        {/* useContext */}
        <Abuelo />
        {/* useReducer */}
        <ListaTareas />
      </div>
  );
}

export default App;