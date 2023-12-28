/* import { useState, useEffect } from "react";
import { frutas as datafrut } from "./components/data/fruta";
import FrutaList from "./components/frutas/FrutasList";
import FrutaForm from "./components/frutas/FrutaForm"; */
import TaskList from "./components/tasks/TaskList"
import TaskForm from "./components/tasks/TaskForm"

function App() {
/*   const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    setFrutas(datafrut);
  }, []); */
  /* function createFruta(fruta) {
    setFrutas([
      ...frutas,
      {
        nombre: fruta.nombre,
        id: frutas.length,
        color: fruta.color,
        sabor: fruta.sabor,
      },
    ]);
  } */
  /* function deleteFruta(Frutaid) {
    setFrutas(frutas.filter((fruta) => fruta.id !== Frutaid));
  } */

  return (
    <main className="bg-zinc-900 h-screen" >
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />
      
      { /* <FrutaForm createFruta={createFruta} />
      <FrutaList frutas={frutas} deleteFruta={deleteFruta} /> */}
      </div>
    </main>
  );
}

export default App;
