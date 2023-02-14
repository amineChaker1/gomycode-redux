import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.users);
  return (
    <div>
      <h1> Hello {user.name} </h1>
      <p> your mail is {user.email} </p>
    </div>
  );
};

export default Navbar;
