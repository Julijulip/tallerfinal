export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard Dev 📊</h1>

      {/* ESTADÍSTICAS */}
      <div className="stats">
        <div className="card">
          <h3>Usuarios</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Proyectos</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>APIs usadas</h3>
          <p>3</p>
        </div>

        <div className="card">
          <h3>Visitas</h3>
          <p>540</p>
        </div>
      </div>

      {/* BARRAS DE HABILIDADES */}
      <h2>Habilidades 💻</h2>

      <div className="skills">
        <div>
          <p>JavaScript</p>
          <div className="bar"><div style={{ width: "90%" }}></div></div>
        </div>

        <div>
          <p>React</p>
          <div className="bar"><div style={{ width: "80%" }}></div></div>
        </div>

        <div>
          <p>Node.js</p>
          <div className="bar"><div style={{ width: "70%" }}></div></div>
        </div>

        <div>
          <p>MongoDB</p>
          <div className="bar"><div style={{ width: "75%" }}></div></div>
        </div>
      </div>
    </div>
  );
}