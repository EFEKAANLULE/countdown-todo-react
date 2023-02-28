import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // empty array to give the tasks to  // By default the tasks array is empty 
  const [intervals, setIntervals] = useState([]);  // time control

  const addTask = (title, countdown) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      countdown,
      done: false,
      timeLeft: countdown,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);

  }
  

  return (
    <div className="App">
      <h1>Efe's Todo List with Countdown</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
