/*
Add todo
Delete todo
Update todo
cancel update

input delete edit add cancel save
complertion status

*/

import { useContext, useState } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  id: Date.now(),
  title: "",
  isComplete: false,
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState({
    id: Date.now(),
  });

  console.log(todos);

  return (
    <TodoContext.Provider value={{ ...todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
