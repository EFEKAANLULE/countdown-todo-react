import { useState } from "react";

function TodoForm({ onAddTask }) { //takes onAddTask as prop
  const [task, setTask] = useState(""); //user task input
  const [countdown, setCountdown] = useState(0);

  const handleSubmit = (e) => { // will be called when user submits the form
    e.preventDefault(); // refresh engelleme
    if(task  && countdown){ // checks whether the fields are empty 
      onAddTask(task, countdown);
      setTask(""); // resets the variables to initial states.
      setCountdown(0);
    }
    else{
      alert('Please Input a Valid Task')
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task} // not necessary
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <input
        type="number"
        value={countdown}
        onChange={(e) => setCountdown(e.target.value)}
        placeholder="Enter countdown time in seconds" // not visible
      />
      <button type="submit">Add task</button>
    </form>
  );
}

export default TodoForm;
