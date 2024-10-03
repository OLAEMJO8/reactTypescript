import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
function App() {
  return (
    <div>
      <h1>React + Typescript</h1>

      <hr />
      <h2>useState</h2>
      <hr />
      <Counter />
      <hr />
      <Usuario />

      <h2>useEffect-useRef</h2>
      <hr />
      <TimerPadre />

      <h2>custom HOOK</h2>
      <hr />
      <Formulario />
    </div>
  );
}

export default App;
