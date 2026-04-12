import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [data, setData] = useState({});

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/auth/register", data);
    alert("Registrado");
  };

  return (
    <div>
      <input placeholder="Nombre" onChange={e => setData({...data, name: e.target.value})}/>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})}/>
      <input placeholder="Password" onChange={e => setData({...data, password: e.target.value})}/>
      <button onClick={handleSubmit}>Registrarse</button>
    </div>
  );
}