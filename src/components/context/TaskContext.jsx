import { tasks as data } from "../data/task";
import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const TaskContext = createContext();

//componente que va a englobar a todos los demas componentes
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  function deleteTask(Taskid) {
    setTasks(tasks.filter((task) => task.id !== Taskid));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        //Este es el espacio que ocuparan los demas componentes, por ende podran acceder a cualquiera de los value colocados en la parte superior y que estan siendo enviados como props, es decir podria hacer un console.log(value) y este contendra el valor de tasks que es un array que contiene las actuales tareas, ademas de las funciones deleteTask que pide un taskid para empezar con la evaluacion de emparejar id y a partir de eso actualiza el valor de tasks
      }}
    >
      {props.children} 
    </TaskContext.Provider>
  );
}

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
