import { configureStore, createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: "",
  reducers: {
    getUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
