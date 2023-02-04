import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "../../redux/store";

const Counter = () => {
  const count = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementBy(parseInt(e.target.number.value)));
  };
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      {count}
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="number" name="number" />
        <button type="submit">Increment by</button>
      </form>
    </div>
  );
};

export default Counter;
