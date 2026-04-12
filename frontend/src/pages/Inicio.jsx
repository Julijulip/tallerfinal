export default function Inicio() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">

      {/* IMAGEN GRANDE */}
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        alt="programacion"
        className="hero-img"
      />

      {/* TEXTO */}
      <h1>Bienvenido a DevHub 💻</h1>

      {user && <p className="welcome">👨‍💻 Hola, {user.name}</p>}

      <p className="intro">
        Esta es una aplicación desarrollada con React, Node.js y MongoDB.
        Aquí podrás explorar el uso de APIs, autenticación de usuarios
        y conceptos básicos del desarrollo web moderno.
      </p>

      {/* BOTÓN GITHUB */}
      <a href="https://github.com/julijulip" target="_blank">
        <button>Ver mi GitHub</button>
      </a>

    </div>
  );
}