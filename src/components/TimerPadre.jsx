import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  //Establecer valores por milisegundos
  //Mandar los argumentos de los milisegundos a Timer(componente hijo)

  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div>
      <span>Milisegundos {milisegundos}</span>

      <button
        className="btn btn-outline-success mt-2  mx-2"
        onClick={() => setMilisegundos(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success mt-2  mx-2"
        onClick={() => setMilisegundos(2000)}
      >
        2000
      </button>
      <Timer milisegundos={milisegundos} />
    </div>
  );
};
