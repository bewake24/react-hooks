import React, { useState } from "react";
import Header from "./Header";

function UseState() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const increament = () => {
    setCount(count + 1);
    setMessage("");
  };
  const decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setMessage("Count can't be less than 0");
    }
  };

  return (
    <div className="">
      <Header title="UseState" />

      <div className="text-center">
        <p className="text-2xl mt-2">Count: {count > -1 ? count : 0}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={increament}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4 ml-4"
          onClick={decreament}
        >
          -
        </button>
        <p className="text-2xl mt-2 text-red-500">{message}</p>
      </div>
    </div>
  );
}

export default UseState;
