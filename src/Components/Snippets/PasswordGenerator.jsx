import React, { useEffect, useState } from "react";

const generateRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const suffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
const generatePassword = (length, hasNumbers, hasSymbols) => {
  let password = [];
  length = length ? length : 8;
  hasNumbers = hasNumbers ? hasNumbers : false;
  hasSymbols = hasSymbols ? hasSymbols : false;

  for (let i = 0; i < Math.floor(length); i++) {
    if (generateRandomInRange(0, 1) === 1) {
      password.push(String.fromCharCode(generateRandomInRange(65, 90)));
    } else {
      password.push(String.fromCharCode(generateRandomInRange(97, 122)));
    }
    if (hasNumbers) {
      password.push(String.fromCharCode(generateRandomInRange(48, 57)));
    }
    if (hasSymbols) {
      password.push(String.fromCharCode(generateRandomInRange(33, 47)));
    }
  }
  return suffleArray(password.slice(0, length)).join("");
};

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);

  return (
    <div className="bg-slate-800 h-screen w-full">
      <h1 className="text-6xl text-center font-bold text-white ">
        Password Generator
      </h1>

      <div className="bg-slate-600 w-2/5 mx-auto my-10 rounded-xl p-8">
        <p className="text-2xl text-center mt-4 text-white">
          Generate a password
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Password"
            value={generatePassword(length, numbersAllowed, symbolsAllowed)}
            className="text-2xl mt-4 bg-white text-slate-800 px-8 py-2 rounded-l-full grow outline-none"
          />
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                generatePassword(length, numbersAllowed, symbolsAllowed)
              )
            }
            className="bg-slate-800 mt-4 text-white px-8 py-2 rounded-r-full"
          >
            Copy
          </button>
        </div>
        <div className="flex mt-8 gap-4 justify-between">
          <div className="flex items-center justify-start gap-2">
            <input
              type="range"
              min="8"
              max="16"
              name="length"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="text-2xl bg-white px-8 py-2 rounded-l-full grow outline-none "
            />{" "}
            <label htmlFor="length" className="text-white ">
              Length: {length}
            </label>
          </div>

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
              name="numbers"
            />
            <label htmlFor="numbers" className="text-white">
              Numbers
            </label>
          </div>

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              defaultChecked={symbolsAllowed}
              onChange={() => {
                console.log("tests");
                setSymbolsAllowed((prev) => !prev);
              }}
              name="characters"
            />
            <label htmlFor="characters" className="text-white ">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
