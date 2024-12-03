import React, { useEffect, useState, useCallback, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let password = "";
    // length = length ? length : 8;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (numbersAllowed) {
      characters += numbers;
    }
    if (symbolsAllowed) {
      characters += symbols;
    }
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(password);
  }, [length, numbersAllowed, symbolsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, symbolsAllowed]);

  useRef(() => {}, [passwordRef]);

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
            value={password}
            ref={passwordRef}
            className="text-2xl mt-4 bg-white text-slate-800 px-8 py-2 rounded-l-full grow outline-none"
          />
          <button
            onClick={() => {
              window.navigator.clipboard.writeText(password);
              passwordRef.current?.select();
            }}
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
