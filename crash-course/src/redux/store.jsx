import { createStore } from "redux";
import counterReducer from "./reducers/countReducer";
const store = createStore(counterReducer);

export default store;
