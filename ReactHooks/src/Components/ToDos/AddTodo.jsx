import React, { useEffect, useState } from "react";
import { useTodo } from "./Todo.context";

function Todo() {
  const { setTodos, id, isComplete, title } = useTodo();
  const [todoTitle, setTodoTitle] = useState("");
  const [isToDoComplete, setIsToDoComplete] = useState(false);

  const addTodo = () => {
    console.log(id, title, isComplete);
    const newTodo = {
      title: todoTitle,
      isComplete: isToDoComplete,
    };
    setTodos(newTodo);
  };

  useEffect(() => {
    console.log(isToDoComplete);
  }, [isToDoComplete]);

  return (
    <div className="p-4 m-4 border border-slate-400 rounded flex">
      <input
        type="text"
        placeholder="Add a task"
        onChange={(e) => setTodoTitle(e.target.value)}
        className="flex-grow rounded p-1 outline-none"
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
      >
        +
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded ml-4">
        X
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded ml-4">
        📝
      </button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-4">
        ✔️
      </button>
      <button
        onClick={() => setIsToDoComplete((prev) => !prev)}
        className="bg-pink-500 text-white px-4 py-2 rounded ml-4"
      >
        "✅"
      </button>
    </div>
  );
}

export default Todo;
