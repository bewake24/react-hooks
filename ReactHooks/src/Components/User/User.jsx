import React from "react";
import Login from "./Login";
import Profile from "./Profile";
import { UserProvider } from "./user.context";

function User() {
  return (
    <UserProvider>
      <div>
        <Login />
        <Profile />
        <h1>More Components</h1>
      </div>
    </UserProvider>
  );
}

export default User;
