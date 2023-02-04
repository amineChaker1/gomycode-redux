import movies from "../../assets/movies";
import { ADD } from "../actions/actions";

const movieReducer = (state = { movies }, action) => {
  if (action.type == ADD) {
    const newMovie = {
      cover: e.target.cover.value,
      name: e.target.name.value,
      author: e.target.author.value,
    };
    state.movies = [...movies, newMovie];
  } else {
    return state;
  }
};

export default movieReducer;
