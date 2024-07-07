import { useState } from "react";

export default function TodoInput(props) {
  const { handleSetTodos } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <div>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          type="text"
          placeholder="Enter Todo"
        />
        <button
          onClick={() => {
            handleSetTodos(todoValue);
            setTodoValue('');
            
          }}
          disabled={(!todoValue.trim())}
        >
          Add
        </button>
      </header>
    </div>
  );
}
