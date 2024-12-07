import React, { useState } from "react";
import { useTodo } from "./Todo.context";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 m-2 py-2 gap-x-3 shadow-sm shadow-white/10 duration-200 text-black ${
        todo.isComplete ? "bg-green-200" : " bg-red-200"
      }`}
    >
      <input
        type="checkbox"
        onChange={() => toggleTodo(todo.id)}
        className="cursor-pointer"
        checked={todo.isComplete}
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        readOnly={!isEditable}
        className={`w-full border border-black/10 rounded-lg  outline-none ${
          isEditable ? " border-black/10 px-2" : "border-transparent"
        }`}
      />
      <button
        disabled={todo.isComplete}
        onClick={() => {
          if (todo.isComplete) return;
          if (isEditable) {
            updateTodo(todo.id, { ...todo, title });
            setIsEditable(false);
          } else {
            setIsEditable(true);
          }
        }}
        className="bg-green-200 px-2"
      >
        {!isEditable ? "✎" : "✔️"}
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-pink-400 px-2 ml-2"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
