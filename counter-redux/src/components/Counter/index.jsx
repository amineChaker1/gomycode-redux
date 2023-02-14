import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../app/store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log(dispatch(increment));
    dispatch(increment());
  };
  const handleDecrement = () => {
    console.log(dispatch(decrement));
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      {counter}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
