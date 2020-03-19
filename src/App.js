import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo'


function App() {
  const [todo, setTodo] = useState([
    {
      task: 'Organize Garage',
      id: 0,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1,
      completed: false
    },
    {
      task: 'Learn React',
      id: 2,
      completed: false
    },
    {
      task: 'Workout',
      id: 3,
      completed: false
    },
    {
      task: 'Walk Bella',
      id: 4,
      completed: false
    },
    {
      task: '2 Hour Nap',
      id: 5,
      completed: false
    },
  ]);

const addNewTodo = task => {
  const newTodo = {
    id: Date.now(),
    task: task.task,
    completed: task.completed
  };
  setTodo([...todo, newTodo]);
};
  
    return (
      <div>
        <h2>Todo List: MVP</h2>
        {todo.map(todos => <div>{todos}</div>)}
        <TodoForm addNewTodo={addNewTodo} />
        <Todo todo={todo} />
      </div>
    );
}

export default App;
