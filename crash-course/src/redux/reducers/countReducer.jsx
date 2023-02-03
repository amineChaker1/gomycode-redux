import { INCREMENT, DECREMENT } from "../actions/types";
const counterReducer = (state = { count: 4 }, action) => {
  if (action.type === INCREMENT) {
    return { ...state, count: state.count + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, count: state.count - 1 };
  } else {
    return state;
  }
};

export default counterReducer;
