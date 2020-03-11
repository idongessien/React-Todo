import React, { useState } from "react";

const TodoForm = props => {
  const [todos, setTodos] = useState({
    task: "",
    id: "",
    completed: ""
  });

  const handleChanges = e => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };

  const addTodo = e => {
    e.preventDefault();
    props.addNewTodo(todos);
    setTodos({ task: "", id: "", completed: "" });
  };

  return (
    <form onSubmit={addTodo}>
      <input
        onChange={handleChanges}
        type="text"
        name="task"
        placeholder="Add new task..."
        value={todos.task}
      />
      <button type="submit">Add Todo</button>
      <button type="submit">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
