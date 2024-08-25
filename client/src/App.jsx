import { useState } from "react";
import { Hero, Navbar, DialogBox } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  const createNewTask = (title) => {
    const currDate = new Date();
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title,
      date: currDate.toDateString(),
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <Navbar onCreateTask={createNewTask} />
      <Hero tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
