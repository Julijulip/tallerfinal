import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(data);

    try {
      if (isLogin) {
        const res = await axios.post(
          "https://tallerfinal-5ryy.onrender.com/api/auth/login",
          data
        );
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      } else {
        await axios.post(
          "https://tallerfinal-5ryy.onrender.com/api/auth/register",
          data
        );
        alert("Registrado correctamente");
        setIsLogin(true);
      }
    } catch (err) {
      console.log(err);
      alert("Error al registrar o iniciar sesión");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

        {!isLogin && (
          <input
            placeholder="Nombre"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        )}

        <input
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Registrarse"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)} className="switch">
          {isLogin
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </p>
      </div>
    </div>
  );
}