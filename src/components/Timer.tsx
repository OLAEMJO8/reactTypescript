import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  milisegundos: number;
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null); // Mantén la referencia al setInterval

  useEffect(() => {
    // Limpiar el interval cuando cambian los milisegundos o el componente se desmonta
    if (ref.current) {
      clearInterval(ref.current);
    }

    // Iniciar el temporizador con el intervalo actualizado
    ref.current = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, milisegundos);

    return () => {
      // Limpiar el temporizador cuando el componente se desmonta
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, [milisegundos]); // Ejecutar este efecto cada vez que 'milisegundos' cambia

  return <div>Timer: {segundos}</div>;
};
