import { useState } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodo] = useState([]);
  function handleSetTodos(newTodo) {
    const newTodolist = [...todos, newTodo];
    setTodo(newTodolist);
  }
  function handeledeleteTod() {
    const newTodolist = todos.filter((todo, todoIndex) => {
      return newIndex !== index;
    });
    setTodo(newTodolist);
  }

  return (
    <>
      <TodoInput handleSetTodos={handleSetTodos} />

      <Todolist todos={todos} />
    </>
  );
}

export default App;
