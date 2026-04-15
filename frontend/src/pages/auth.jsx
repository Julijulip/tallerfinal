import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");

    // VALIDACIONES
    if (!data.email || !data.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(data.email)) {
      setError("Email inválido");
      return;
    }

    if (data.password.length < 4) {
      setError("La contraseña debe tener mínimo 4 caracteres");
      return;
    }

    try {
      if (isLogin) {
        const res = await axios.post(
          "https://tallerfinal-5ryy.onrender.com/api/auth/login",
          data
        );

        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard"); // 👈 más seguro
      } else {
        await axios.post(
          "https://tallerfinal-5ryy.onrender.com/api/auth/register",
          data
        );

        alert("Registrado correctamente");
        setIsLogin(true);
      }
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

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

        {/* PASSWORD + OJITO */}
        <div style={{ position: "relative", marginTop: "10px" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            style={{
              width: "100%",
              padding: "12px",
              paddingRight: "40px"
            }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#aaa"
            }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>

        {/* OLVIDASTE CONTRASEÑA */}
        {isLogin && (
          <p
            onClick={() => navigate("/forgot-password")}
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "#38bdf8",
              cursor: "pointer",
              textAlign: "right"
            }}
          >
            ¿Olvidaste tu contraseña?
          </p>
        )}

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