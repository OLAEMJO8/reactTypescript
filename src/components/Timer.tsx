import { useEffect, useRef, useState } from "react";
//Necesito recibir un argumento desde el padre, de la cantidad de milesimas a establecer

type TimerArgs = {
  milisegundos: number;
};
export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState(0);

  //Establecer constante. Crea una referencia que no no importa cuantas veces se reconstruya el componente, guarda el mismo valor en memoria
  //<NodeJS-Timeout/> establece el tipo de dato del ref
  const ref = useRef<NodeJS.Timeout>();

  // Ver argumentos que vienen del componente padre
  console.log(milisegundos);

  //Llamar a setInterval funcion de javascript y hacer limpieza cada vez que se cambia
  //ref.current obtener la refencia al valor actual y hacer limpieza con el ref.current
  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);

  return <div>Timer :{segundos}</div>;
};
