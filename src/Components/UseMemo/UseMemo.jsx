import React, { useState, useMemo } from "react";
import Header from "../Header";
import array from "./array";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [items] = useState(array);
  const [message, setMessage] = useState("");
  const selectedItem = useMemo(
    () => items.find((item) => (item.id = count)),
    [items, count]
  );

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
  console.log(selectedItem);

  return (
    <>
      <Header title="UseMemo" />

      <div className="text-center">
        <p className="text-2xl mt-2">Count: {count > -1 ? count : 0}</p>
        <p className="text-2xl mt-2">Selected Item: {selectedItem?.id}</p>
        <button
          className="bg-blue-500 text-2xl font-bold text-white px-4 py-2 rounded mt-4"
          onClick={increament}
        >
          +
        </button>
        <button
          className="bg-red-500 text-2xl font-bold text-white px-4 py-2 rounded mt-4 ml-4"
          onClick={decreament}
        >
          -
        </button>
        <p className="text-2xl mt-2 text-red-500">{message}</p>
      </div>
    </>
  );
}

export default UseMemo;
