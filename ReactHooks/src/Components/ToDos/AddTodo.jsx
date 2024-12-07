import React, { useState, useRef } from "react";
import { useTodo } from "./Todo.context";

function AddTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef(null);
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    addTodo({ title: todoTitle });
    setTodoTitle("");
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setTodoTitle(e.target.value)}
        className="border border-slate-400 outline-none rounded-l-lg bg-transparent p-1  mt-4 ml-4 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg mt-4 mr-4"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
