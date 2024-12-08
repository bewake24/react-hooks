import AddTodo from "./comonents/AddTodo";
import Todos from "./comonents/Todos";

export default function App() {
  return (
    <div className="bg-gray-950 h-screen text-gray-50 mx-auto tex-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}
