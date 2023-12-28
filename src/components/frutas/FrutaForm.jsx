import PropTypes from "prop-types";
import { useState } from "react";

function FrutaForm({ createFruta }) {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [sabor, setSabor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createFruta({
      nombre,
      color,
      sabor,
    });
    setNombre('')
    setColor('')
    setSabor('')
  };

  FrutaForm.propTypes = {
    createFruta: PropTypes.func.isRequired,
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu fruta"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <textarea
          placeholder="Escribe el color de la fruta"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        ></textarea>

        <textarea
          placeholder="Escribe el sabor de la fruta"
          onChange={(e) => setSabor(e.target.value)}
          value={sabor}
        ></textarea>

        <button>Guardar Fruta</button>
      </form>
    </div>
  );
}

export default FrutaForm;
