import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [ciudad, setCiudad] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(ciudad);
      setCiudad("");
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={ciudad}
        onChange= {e => setCiudad(e.target.value)}
      />
      <input type="submit" value="Agregar"  />
    </form>
  );
}
