import { useTodo } from "../contexts";
import { useRef, useState } from "react";

function AddTodo() {
  const [todo, setTodo] = useState([]);
  const { addTodo } = useTodo();
  const inputRef = useRef(null);

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, isComplete: false });
    setTodo("");
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-200 bg-white/20 py-2"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-2 bg-green-500 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
