import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: Date.now(), title: "", isCompleted: false }],
  addTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
  updateTodo: () => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
