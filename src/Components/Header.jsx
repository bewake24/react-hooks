import React from "react";

function Header({ title }) {
  return (
    <h2 className="text-6xl text-center font-bold border-b-2 border-black">
      {title}
    </h2>
  );
}

export default Header;
