import PropTypes from "prop-types";

function FrutaCard({ fruta, deleteFruta }) {
  return (
    <div>
      <h1>{fruta.nombre}</h1>
      <p>{fruta.color}</p>
      <p>{fruta.sabor}</p>
      <button onClick={() => deleteFruta(fruta.id)}
      >
        Eliminar tarea</button>
    </div>
  );
}
FrutaCard.propTypes = {
  fruta: PropTypes.object.isRequired,
  deleteFruta: PropTypes.func.isRequired,
};
export default FrutaCard;
