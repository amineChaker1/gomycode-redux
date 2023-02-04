import { configureStore, createSlice } from "@reduxjs/toolkit";
import { movies } from "../movies";
const movieSlice = createSlice({
  name: "movies",
  initialState: movies,
  reducers: {
    ToggleWatched: (state, action) => {
      state = state.map((movie) => {
        if (movie.id === action.payload) {
          return { ...movie, watched: !movie.watched };
        }
        return movie;
      });
      return state;
    },
  },
});
export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});

export const { ToggleWatched } = movieSlice.actions;
