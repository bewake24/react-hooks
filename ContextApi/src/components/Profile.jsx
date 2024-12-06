import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h1>Profile: {user ? user.username : "Not Logged In"}</h1>
      <h3>More Components</h3>
    </div>
  );
}

export default Profile;
