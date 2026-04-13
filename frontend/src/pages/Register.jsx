import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    // campos vacíos
    if (!data.email || !data.password) {
      return "Todos los campos son obligatorios";
    }

    // validar email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(data.email)) {
      return "Email inválido";
    }

    // contraseña mínima
    if (data.password.length < 4) {
      return "La contraseña debe tener mínimo 4 caracteres";
    }

    return null;
  };

  const handleSubmit = async () => {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await axios.post(
        "https://tallerfinal-5ryy.onrender.com/api/auth/login",
        data
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Iniciar Sesión</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          placeholder="Email"
          onChange={e => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={e => setData({ ...data, password: e.target.value })}
        />

        <button onClick={handleSubmit}>Iniciar sesión</button>
      </div>
    </div>
  );
}