import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../../redux/actions/types";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: INCREMENT })}>increment</button>
      {count}
      <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
    </div>
  );
};

export default Counter;
