import { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => setCharacters(res.data.results));
  }, []);

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Personajes</h1>

      <input
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filtered.map(c => (
          <div className="card" key={c.id}>
            <img src={c.image} />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}