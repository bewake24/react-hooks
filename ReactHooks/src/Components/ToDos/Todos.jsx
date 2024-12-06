import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import Header from "../Header";
import { TodoProvider, useTodo } from "./Todo.context";
import Todo from "./Todo";

function Todos() {
  const { title } = useTodo();

  useEffect(() => {
    console.log(title);
  }, [title]);
  return (
    <TodoProvider>
      <div className="h-screen bg-slate-600">
        <Header title="ToDos" />
        <AddTodo />
        {title ? <Todo /> : <h3>Congrats list is empty</h3>}
      </div>
    </TodoProvider>
  );
}

export default Todos;
