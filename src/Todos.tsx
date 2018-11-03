import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import "./Todos.css";
import Form from "./Form";

interface ITodoItem {
  id: string;
  text: string;
  complete: boolean;
}

interface ITodos extends Array<ITodoItem> {}

const Todos = () => {
  const [todos, setTodos] = useState<ITodos>([]);

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map(
        todo => (todo.id === id ? { ...todo, complete: !todo.complete } : todo)
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
      }}
    >
      <Form
        onSubmit={(text: string) =>
          text.length > 0 &&
          setTodos([{ id: uuidv1(), text, complete: false }, ...todos])
        }
      />
      {todos.map(todo => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.complete ? "line-through" : ""
            }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>del</button>
        </div>
      ))}
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};

export default Todos;
