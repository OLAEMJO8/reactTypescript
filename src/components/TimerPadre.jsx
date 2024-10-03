import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000); // Tiempo por defecto
  const [iniciar, setIniciar] = useState(false); // Controla si el temporizador está corriendo
  const [enPausa, setEnPausa] = useState(false); // Controla si el temporizador está en pausa

  // Inicia el temporizador
  const iniciarTemporizador = () => {
    setIniciar(true);
    setEnPausa(false);
  };

  // Pausa el temporizador
  const pausarTemporizador = () => {
    setEnPausa(true);
  };

  // Reanuda el temporizador
  const reanudarTemporizador = () => {
    setEnPausa(false);
  };

  return (
    <div>
      <span>Milisegundos: {milisegundos}</span>

      <button
        className="btn btn-outline-success mt-2 mx-2"
        onClick={() => setMilisegundos(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success mt-2 mx-2"
        onClick={() => setMilisegundos(2000)}
      >
        2000
      </button>

      {/* Botones para iniciar, pausar y reanudar */}
      {!iniciar ? (
        <button
          className="btn btn-outline-primary mt-2 mx-2"
          onClick={iniciarTemporizador}
        >
          Iniciar
        </button>
      ) : enPausa ? (
        <button
          className="btn btn-outline-warning mt-2 mx-2"
          onClick={reanudarTemporizador}
        >
          Reanudar
        </button>
      ) : (
        <button
          className="btn btn-outline-danger mt-2 mx-2"
          onClick={pausarTemporizador}
        >
          Pausar
        </button>
      )}

      {/* Componente Timer que depende del estado de 'iniciar' y 'enPausa' */}
      {iniciar && !enPausa && <Timer milisegundos={milisegundos} />}
    </div>
  );
};
