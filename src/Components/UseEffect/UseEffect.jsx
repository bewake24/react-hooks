import React, { useState, useEffect } from "react";
import Header from "../Header";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [effectMessage, setEffectMessage] = useState("Effect not added yet");
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

  useEffect(() => {
    console.log("Count: " + count);
    setEffectMessage(`I rendered because effect happened ${count} times`);

    return () => {
      console.log("I'm being cleanedup");
    };
  }, [count, message]);
  return (
    <div className="">
      <Header title="UseEffect" />

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
        <p>{effectMessage}</p>
      </div>
    </div>
  );
}

export default UseEffect;
