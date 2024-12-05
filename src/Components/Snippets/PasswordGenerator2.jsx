import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "../Header";

function generatePassword(length, hasNo, hasSym) {
  let password = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (hasNo) {
    characters += numbers;
  }
  if (hasSym) {
    characters += symbols;
  }
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

const PasswordGenerator2 = () => {
  const [length, setLength] = useState(8);
  const [hasNo, setHasNo] = useState(false);
  const [hasSym, setHasSym] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const regenerateTimeoutRef = useRef(null);

  const passwordGenerator = useCallback(generatePassword, [
    length,
    hasNo,
    hasSym,
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPassword(passwordGenerator(length, hasNo, hasSym));
      passwordRef.current.className = "bg-white";
    }, 500);
    if (timeout) {
      return () => clearTimeout(timeout);
    }
  }, [length, hasNo, hasSym]);

  const handleHasNo = () => {
    setHasNo((prev) => !prev);
  };

  const handleHasSym = () => {
    setHasSym((prev) => !prev);
  };

  const handleCopy = () => {
    console.log(passwordRef);
    passwordRef.current.className = "bg-purple-500";
    window.navigator.clipboard.writeText(password);
  };

  const handleRegenrate = () => {
    if (regenerateTimeoutRef.current) {
      clearTimeout(regenerateTimeoutRef.current);
    }
    regenerateTimeoutRef.current = setTimeout(() => {
      passwordRef.current.className = "bg-white";
      setPassword(passwordGenerator(length, hasNo, hasSym));
      regenerateTimeoutRef.current = null; // Reset ref after execution
    }, 200);
  };
  return (
    <div className="bg-slate-200 h-screen">
      <Header title={"Password Generator Practice"} />
      <input
        type="text"
        ref={passwordRef}
        value={password}
        disabled
        className="bg-white"
      />
      <button onClick={handleCopy} className="border border-black px-8 py-2">
        Copy
      </button>
      <button
        onClick={handleRegenrate}
        className="border border-black px-8 py-2"
      >
        {" "}
        Regenerate
      </button>
      <label htmlFor="">Length</label>
      <input
        type="range"
        id="length"
        min={8}
        max={32}
        onChange={(e) => setLength(e.target.value)}
      />
      <label htmlFor="">Numbers</label>
      <input type="checkbox" defaultChecked={hasNo} onChange={handleHasNo} />
      <label htmlFor="">Symbols</label>
      <input type="checkbox" defaultChecked={hasSym} onChange={handleHasSym} />
    </div>
  );
};

export default PasswordGenerator2;
