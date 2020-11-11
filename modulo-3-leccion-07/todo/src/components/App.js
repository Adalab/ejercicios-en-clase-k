import { useState } from "react";
import "./App.scss";
import Header from "./Header";
import TaskList from "./TaskList";
import TaskCreate from './TaskCreate';

function App(props) {
  const initialData = [
    { subject: "Dar clase de Hooks ya mismo", date: 11 },
    { subject: "Comer", date: 11 },
    { subject: "Comer", date: 12 },
  ];

  const [taskList, setTaskList] = useState(initialData);

  const createNewTask = (newSubject, newDate) => {
    const newTask = { subject: newSubject, date: newDate };
    // NOOO taskList.push(newTask);
    setTaskList([...taskList, newTask]);
  };

    return (
      <div className="App">
        <Header number="2.7" lesson="Hooks" title="TODO" subtitle="With functional components! (where available)" />
        <main className="container">
          <h3 className="app__title">Lista de tareas</h3>
          <TaskList list={taskList} />
          <TaskCreate handleCreate={createNewTask} />
        </main>
      </div>
    );
  }

export default App;
