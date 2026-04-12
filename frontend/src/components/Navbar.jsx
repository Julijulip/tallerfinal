import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/api">API</Link>
      <Link to="/dashboard">Dashboard</Link>

      {user ? (
        <button onClick={logout}>Cerrar sesión</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}