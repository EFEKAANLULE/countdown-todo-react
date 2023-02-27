function TodoList({ tasks }) { //takes tasks as props from app 
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? "done" : ""}>
          {task.title}
          <span>{task.timeLeft} seconds left</span>
        </li>
      ))}
    </ul>
  );
}
/*The TodoList component takes the tasks as props and then  returns a ul element that contains a list of li elements, one for each task in the tasks array.
 We're using the map method to iterate over the tasks array and generate a list item for each task. */
export default TodoList;
