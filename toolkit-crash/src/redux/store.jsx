//import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//const store = createStore(counterReducer);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
});
export default store;
