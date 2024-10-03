import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
}
export const Formulario = () => {
  const { formulario, handleChange } = useForm<FormData>({
    email: "",
    nombre: "",
  });

  const { email, nombre } = formulario;
  return (
    <form autoComplete="off">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Email
        </span>

        <input
          type="email"
          className="from-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          name="email"
          value={email}
          onChange={handleChange}
        ></input>
      </div>
      <br />
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Nombre
        </span>

        <input
          type="text"
          id="formGroupExampleInput"
          className="from-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
};
