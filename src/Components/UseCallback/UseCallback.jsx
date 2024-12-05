import React, { useState, useCallback, useEffect, useRef } from "react";
import Header from "../Header";

const expensiveFunction = () => {
  console.log("Function called");
  let res = 0; // Proper initialization
  for (let i = 0; i < 10 ** 6; i++) {
    res += i;
  }
  return res;
};

function UseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);
  const fnRef = useRef(null);
  const expFn = useCallback(() => {
    console.log("Function called");
    let res;
    for (let i = 0; i < 10 ** 6; i++) {
      res += i;
    }
    return res;
  }, [count]);

  // const expFn = useCallback(() => expensiveFunction(), [count]);
  useEffect(() => {
    if (fnRef.current) {
      if (fnRef.current === expFn) {
        console.log("Function NOT RECREATED");
      } else {
        console.log("Function RECREATED");
      }
    } else {
      fnRef.current = expFn;
    }
  }, [expFn]);
  return (
    <div>
      <Header title="useCallback" />
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="border border-slate-400 outline-none rounded-lg bg-transparent p-1 mt-2"
      />
      <p>
        {count} {expFn()}{" "}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default UseCallback;
