import React from "react";
import classe from "./movieform.module.css";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/actions";
const MovieForm = () => {
  return (
    <div>
      <div className={classe.container}>
        <form
          onSubmit={(e) => useDispatch({ type: ADD })}
          className={classe.formHandle}
        >
          <label htmlFor="name">Movie Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="author"> Movie Author</label>
          <input type="text" name="author" />
          <label htmlFor="cover"> Cover Image URL </label>
          <input type="url" name="cover" id="cover" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
