import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // empty array to give the tasks to  // By default the tasks array is empty 
  const [intervals, setIntervals] = useState([]);  

  const addTask = (title, countdown) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      countdown,
      done: false,
      timeLeft: countdown,
    };

    // add the new task to the state
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // update the countdown for the task every second
    const intervalId = setInterval(() => { // id for the time, sort of 
      setTasks((prevTasks) => {
        return prevTasks.map((task) => { //for every task in the prevtask array we check whether the countdown is reached 0, if it is it is 'DONE'
          if (task.id === newTask.id) {
            if (task.timeLeft === 0) {
              task.done = true;
            } else {
              task.timeLeft -= 1;
            }
          }
          return task;
        });
      });
    }, 1000);

     // add the interval ID to the state
    setIntervals((prevIntervals) => [...prevIntervals, intervalId]);
  };
  //add task function is finished.

  useEffect(() => { // by using useEffect, we can ensure that countdown timers are updated every second, even if the user adds or removes tasks from the array.
    return () => {
      intervals.forEach((intervalId) => clearInterval(intervalId)); // memory efficient ? 
    };
  }, [intervals]);

  return (
    <div className="App">
      <h1>Efe's Todo List with Countdown</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
