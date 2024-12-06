import { useState } from "react";
import { useTodo } from "../contexts";

function AllTodos({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleTodo(todo.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-sm shadow-white/10 duration-200 text-black ${
        todo.isComplete ? "bg-green-200" : " bg-red-200"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={toggleComplete}
        className="cursor-pointer"
      />

      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`w-full border border-black/10 rounded-lg  outline-none ${
          isTodoEditable ? " border-black/10 px-2" : "border-transparent"
        }`}
      />
      <button
        disabled={todo.isComplete}
        onClick={() => {
          if (todo.isComplete) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable(true);
          }
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
      >
        {!isTodoEditable ? "✎" : "✅"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-4 py-2 rounded ml-4"
      >
        🗑️
      </button>
    </div>
  );
}

export default AllTodos;
