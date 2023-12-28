import PropTypes from "prop-types";
import FrutaCard from "./FrutaCard";

function FrutaList({ frutas, deleteFruta }) {
  if (frutas.length === 0) {
    return <h1>No hay Frutas aún</h1>;
  }
  return (
    <div>
      {frutas.map((fruta) => (
        <FrutaCard key={fruta.id} fruta={fruta} deleteFruta={deleteFruta}/>
      ))}
    </div>
  );
}
FrutaList.propTypes = {
  frutas: PropTypes.array.isRequired,
  deleteFruta: PropTypes.func.isRequired
};
export default FrutaList;
