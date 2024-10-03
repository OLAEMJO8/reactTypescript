import { ChangeEvent, useState } from "react";

//Custom hook para reutilizar en muchos lugares
export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target; // destructuring
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  return {
    formulario,
    handleChange,
  };
};
