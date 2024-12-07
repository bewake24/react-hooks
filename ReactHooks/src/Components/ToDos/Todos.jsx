import React, { useState } from "react";
import { TodoProvider } from "./Todo.context";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todos() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        isComplete: false,
        ...todo,
      },
      ...prev,
    ]);

    console.log(todos);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    );
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isComplete: !prevTodo.isComplete }
          : prevTodo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
    >
      <div className="p-4 border border-slate-400 ">
        <h1 className="text-6xl text-center font-bold">ToDos</h1>
        <AddTodo />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoProvider>
  );
}

export default Todos;
