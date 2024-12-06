import React, { useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState("bg-red-500");

  return (
    <div className={`${bgColor} h-screen bg-red-500 w-full`}>
      <button
        onClick={() => setBgColor("bg-blue-500")}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Blue
      </button>
      <button
        onClick={() => setBgColor("bg-green-500")}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 ml-4"
      >
        Green
      </button>
      <button
        onClick={() => setBgColor("bg-yellow-500")}
        className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 ml-4"
      >
        Yellow
      </button>
    </div>
  );
}

export default BgChanger;
