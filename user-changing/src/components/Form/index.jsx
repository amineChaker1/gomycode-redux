import React from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../app/store";

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    dispatch(getUser(newUser));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <label htmlFor="name">Name</label> <br />
        <input type="text" name="name" /> <br />
        <label htmlFor="email">Email</label> <br />
        <input type="email" name="email" /> <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
