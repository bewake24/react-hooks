import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: Date.now(), title: "", isComplete: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
