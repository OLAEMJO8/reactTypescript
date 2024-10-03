import { useState } from "react";

interface User {
  uid: string;
  name: string;
}
// tempUser es de tipo User
const tempUser: User = {
  uid: "1234567890AS",
  name: "Juan",
};

export const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = () => {
    setUser({
      uid: "ABC123456",
      name: "Majo",
    });
  };

  return (
    <div>
      <h4>Usuario: useState</h4>

      <button onClick={login} className="btn btn-outline-primary mt-2  mx-2">
        Login
      </button>
      <button
        onClick={() => setUser(tempUser)}
        className="btn btn-outline-primary mt-2  mx-2"
      >
        Cambiar de usuario
      </button>
      <br />
      <br />
      {!user ? <pre> No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
