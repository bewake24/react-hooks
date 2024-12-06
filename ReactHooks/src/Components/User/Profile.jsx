import React from "react";
import { useUser } from "./user.context";

function Profile() {
  const { username, password } = useUser();
  return (
    <div>
      <h1>Profile: {username}</h1>
    </div>
  );
}

export default Profile;
