import React from "react";
import { useState } from "react";
import { useUser } from "./user.context";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const hanldeClick = () => {
    console.log({ password, username });
    setUser({ password, username });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={hanldeClick}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
