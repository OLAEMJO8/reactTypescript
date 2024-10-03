import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";
function App() {
  return (
    <div>
      <h1>React + Typescript</h1>

      <hr />
      <h2>useState</h2>
      <Counter />
      <hr />
      <Usuario />

      <h2>useEffect-useRef</h2>
      <hr />
      <TimerPadre />
    </div>
  );
}

export default App;
