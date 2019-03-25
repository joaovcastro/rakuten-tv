import listReducer from "./listReducer";
import movieReducer from "./movieReducer";
import { combineReducers } from "redux";

export default combineReducers({
  list: listReducer,
  movie: movieReducer
});
