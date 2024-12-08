import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function TodoItem() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <ol>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="max-w-[500px] ml-4 my-4 flex px-4 py-2 bg-gray-500 border rounded-md"
          >
            <li className=" flex-grow">{todo.text}</li>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default TodoItem;
