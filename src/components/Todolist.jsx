import React from "react";
import Todocard from "./Todocard";

export default function Todolist(props) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <Todocard key={todoIndex}>
            <p>{todo}</p>
          </Todocard>
        );
      })}
    </ul>
  );
}
